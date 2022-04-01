import React from "react";

export default function Cart() {
  return (
    <>
      <div className='cart'>
        <div>
          <img
            src='https://rukminim2.flixcart.com/image/224/224/kthjy4w0/power-bank/n/1/l/pocket-pro-pb1022zm-mi-original-imag6tcrh2vcmgxj.jpeg?q=90'
            alt='pic'
          />
          <div>
            <button>-</button>
            <input />
            <button>+</button>
          </div>
        </div>

        <div>
          <h4>Flipkart SmartBuy 10000 mAh Power Bank (22.5 W)</h4>
          <h6>200</h6>
        </div>
      </div>
    </>
  );
}
