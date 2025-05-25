import thumbimg from '../../assets/images/thumb.png';
const ConfirmCancelOrder = () => {
  return (

      <div className=" p-8 py-10 sm:py-[4rem] relative flex items-center justify-between gap-8">
        <img
          src={thumbimg}
            alt="Thumbs Up"
            className="w-24 h-24 md:w-32 md:h-32"
        />
        <div className="text-green-900 text-center">
          <h2 className="text-xl font-semibold">Your order has been cancelled</h2>
          <p className="mt-3 text-base font-semibold leading-relaxed">
            Your order was cancelled.<br />
            You will receive your money within<br />
            <span className="font-semibold">2–3 working days.</span>
          </p>
        </div>
      </div>

  )
}

export default ConfirmCancelOrder
