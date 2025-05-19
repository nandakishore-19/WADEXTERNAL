function Transfer() {
    return (
      <Card className="p-4 m-4 max-w-md mx-auto">
        <h2 className="text-xl mb-4">Transfer Funds</h2>
        <input className="w-full p-2 mb-2 border" placeholder="Recipient Account Number" />
        <input className="w-full p-2 mb-2 border" placeholder="Amount" />
        <button className="bg-blue-600 text-white px-4 py-2">Transfer</button>
      </Card>
    );
  }
  