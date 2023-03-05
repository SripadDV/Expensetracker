import React from "react";

const PaymentChannel = (props) => {
  const paymentChannels = props.paymentChannels;
  const upliftPaymentChannel = props.upliftPaymentChannel;
  //const [category, setCategory] = useState(props.category);
  const paymentChannel = props.paymentChannel;

  const handlePaymentChannel = (e) => {
    //console.log(e.target.value);
    //setCategory(e.target.value);
    upliftPaymentChannel(e.target.value);
  };
  return (
    <div
      style={{
        /*border: "1px solid",*/
        width: "250px",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
      }}
    >
      <select
        onChange={handlePaymentChannel}
        style={{ width: "150px", height: "24px", fontSize: "medium" }}
        value={paymentChannel}
      >
        <option value={"Payment Channel"}>Payment Channel</option>
        {paymentChannels.map((paymentChannel) => (
          <option value={paymentChannel}>{paymentChannel}</option>
        ))}
      </select>
    </div>
  );
};

export default PaymentChannel;
