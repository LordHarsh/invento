const usersSchema = {
    "name": "users",
    "attributes": [
        {
            key: "userId",
            type: "string",
            size: 255,
            required: true
        },
        {
            key: "email",
            type: "string",
            size: 255,
            required: true
        },
        {
            key: "firstName",
            type: "string",
            size: 255,
            required: true
        },
        {
            key: "lastName",
            type: "string",
            size: 255,
            required: true
        }
    ]
};

export default usersSchema;