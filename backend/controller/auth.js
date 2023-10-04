import newUser from "../models/Registration.js";
import bcrypt from 'bcrypt'
import jsonwebtoken from 'jsonwebtoken'

// const SECRET_KEY = process.env.JWT_SECRET_KEY || "defaultSecretKey";  // Using an environment variable or a default

export const signupController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        const userAlreadyRegister = await newUser.findOne({ email });

        if (userAlreadyRegister) {
            return res.status(400).send("this email already exist")
        }

        const signupData = { name, email, password: hashedPassword };
        await newUser.create(signupData);
        res.status(200).send("your account is sucessfully created")

        // res.status(201).json({ message: "User registered successfully!" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}

export const logincontroller = async (req, res) => {
    try {
        const { email, password } = req.body;
        const SECRET_KEY="secretkey"

        const user = await newUser.findOne({ email:email });

        if (user && await bcrypt.compare(password, user.password)) {
            const payload = { email: user.email };

            jsonwebtoken.sign(payload, SECRET_KEY, { expiresIn: "300s" }, (error, token) => {
                if (error) {
                    return res.status(500).json({ message: "Token generation failed.", error });
                }
                res.status(200).json({ message: "validUser" });
                res.cookie(token).json(user)
            });
        } else {
            res.status(200).json({ message: "Incorrect email or password." });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}
