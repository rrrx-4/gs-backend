import { User } from '../models/usermodel.js'


export const getUsers = async (req, res) => {

    console.log('ggg');

    try {
        const users = await User.find({});

        console.log(users);

        res.status(200).json(users);

    } catch (error) {

        res.status(401).json({ message: "Cant get users" })

    }



}

export const editUser = async (req, res) => {

    const { _id } = req.params

    console.log(_id);

    const user = req.body;

    try {

        const { name, email, gender, status, Created_at } = user

        const update_User = { name, email, gender, status, Created_at, _id: _id }

        update_User.Updated_at = new Date();

        const new_user = await User.findByIdAndUpdate(_id, update_User, { new: true }).catch((error) => {
            console.log(error);
        })



        // const new_user = await User.findByIdAndUpdate(_id, update_User, { new: true })

        // console.log(new_user);

        res.status(200).json(new_user);

    } catch (error) {

        res.status(400).json({ message: "Something went wrong" })

    }

}

// export { getUsers, editUser };