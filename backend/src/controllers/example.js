export const exampleAction = (req) => {
    console.log(`Request: ${JSON.stringify(req)}`);
    return { message: 'Hello World'};
}
