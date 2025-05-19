function Login() {
    return (
      <Card className="p-4 m-4 max-w-md mx-auto">
        <h2 className="text-xl mb-4">Login</h2>
        <input className="w-full p-2 mb-2 border" placeholder="Username" />
        <input className="w-full p-2 mb-4 border" type="password" placeholder="Password" />
        <button className="bg-blue-600 text-white px-4 py-2">Login</button>
      </Card>
    );
  }
  