exports = async function({ body }, response) {
    const reqBody = EJSON.parse(body.text());

    // Extracting fields from the request body
    const { firstName, lastName, email, broughtById } = reqBody;

    // Validating required fields
    if (!firstName || !lastName || !email || !broughtById) {
        return response.badRequest("Missing required fields");
    }

    const usersCollection = context.services.get("mongodb-atlas").db("dbname").collection("users");

    // Creating a new user document
    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        broughtByLevel1: broughtById,
    };

    try {
        // Inserting the user document into the MongoDB collection
        const result = await usersCollection.insertOne(user);

        // Returning the newly created user's ID as a response
        return { userId: result.insertedId.toString() };
    } catch (e) {
        // Handling any errors that may occur during the database operation
        console.error("Error saving user:", e.toString());
        return response.internalServerError("Error saving user");
    }
};
