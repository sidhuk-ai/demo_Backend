import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandler(async (req,res) => {
    // get user details from frontend
    const {username, email, fullName, password} = req.body;
    // validation - ki koi fields empty toh nhi
    if([username,email,fullName,password].some((field) => field?.trim() === "")){
        throw new ApiError(400,"Fields can't be empty.");
    }
    // ek aur validation ki user already exist karta hai ya nhi
    const userExists = User.findOne({
        $or:[{ username },{ email }]
    })

    if(userExists){
        throw new ApiError(409,"User Already Exists");
    }
    // avatar aur coverImage ke liye checks hai ye
    const avatarLocalPath = req.files?.avatar[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;
    // kyuki avatar image required hai isiliye uske liye ek validation
    if(!avatarLocalPath){ throw new ApiError(409,"Avatar is needed.") }
    // avatar aur coverImage joh local server pe hai unhe Cloudinary pe upload karna
    const avatar = await uploadOnCloudinary(avatarLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    // again avatar ke liye validation
    if(!avatar) { throw new ApiError(400,"Avatar is needed.") }
    // user ka object banake fields ko database mei push karna
    const user = await User.create({
        username: username.toLowerCase(),
        fullName,
        password,
        email,
        avatar:avatar.url,
        coverImage:coverImage?.url || ""
    })
    // User naam ki field create hui bhi hai ya nhi woh check karne ke liye ek validation
    // Aur haa, createdUser mei password aur refreshToken exclude kiya jayega bcz of followed syntax.
    const createdUser = User.findById("_id").select(
        "-password -refreshToken"
    )

    if(!createdUser) { throw new ApiError(500,"Somethin went wrong while adding data to server") }

    //returning the response
    res.status(200).json(
        new ApiResponse(201,"User successfully created",createdUser)
    )
})

export { registerUser }