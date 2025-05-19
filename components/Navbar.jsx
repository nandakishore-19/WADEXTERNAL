


function Navbar() {
    return (
      <nav className="p-4 bg-blue-600 text-white flex justify-between">
        <div className="text-xl font-bold">BankingApp</div>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/balance" className="hover:underline">Balance</Link>
          <Link to="/transfer" className="hover:underline">Transfer</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/about" className="hover:underline">About</Link>
        </div>
      </nav>
    );
}



