type Data = { name: string; email: string; phone: string; text: string };
export type Resp = { status: string; message: string };

export class Ajax {
  async logIn(data: Data): Promise<Resp> {
    const dataFet = await fetch("http://localhost:9090/api/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    });

    const resp = await dataFet.json();
    return resp;
  }
}
