function Register() {
    return (
      <Card className="p-4 m-4 max-w-md mx-auto">
        <h2 className="text-xl mb-4">Register</h2>
        <input className="w-full p-2 mb-2 border" placeholder="Full Name" />
        <input className="w-full p-2 mb-2 border" placeholder="Email" />
        <input className="w-full p-2 mb-2 border" placeholder="Phone Number" />
        <input className="w-full p-2 mb-2 border" placeholder="Username" />
        <input className="w-full p-2 mb-2 border" placeholder="Address" />
        <input className="w-full p-2 mb-2 border" type="password" placeholder="Password" />
        <input className="w-full p-2 mb-2 border" type="password" placeholder="Confirm Password" />
        <button className="bg-blue-600 text-white px-4 py-2 mt-2">Register</button>
      </Card>
    );
  }