class Response {
    private statusCode = 200;
    private body = ""
    private static instance: Response;

    public static getInstance(): Response {
        if (!Response.instance) {
            Response.instance = new Response();
        }
        return Response.instance;
    }

    public setStatusCode(code: number): void {
        this.statusCode = code;
    }

    public setBody(data: any): void {
        this.body = JSON.stringify(data);
    }

    public prepareResponse(): any {
        const { statusCode, body } = this;
        return {
            statusCode,
            body
        }
    }
}

export default Response;