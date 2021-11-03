function Home(){
  return (
    <Card
      txtcolor="white"
      bgcolor="secondary"
      header="NotSoBad Bank"
      title="Welcome to the bank"
      text="You can move around using the navigation bar."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />
  );  
}
