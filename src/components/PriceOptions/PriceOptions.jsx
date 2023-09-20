import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Use of cardio equipment",
        "Locker room access",
        "Monthly fitness assessment",
        "Discounts at the gym store",
        "Access to basic fitness classes",
        "24/7 gym access",
      ],
      price: "$30/month",
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Access to gym facilities",
        "Use of cardio equipment",
        "Use of weightlifting equipment",
        "Locker room access",
        "Monthly fitness assessment",
        "Group fitness classes",
        "Discounts at the gym store",
        "Sauna and steam room access",
        "Personal trainer consultation (1/month)",
      ],
      price: "$50/month",
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "Access to gym facilities",
        "Use of cardio equipment",
        "Use of weightlifting equipment",
        "Locker room access",
        "Monthly fitness assessment",
        "Group fitness classes",
        "Discounts at the gym store",
        "Sauna and steam room access",
        "Personal trainer sessions (2/month)",
        "Nutritional counseling session (1/month)",
        "Access to all fitness classes",
      ],
      price: "$80/month",
    },
  ];

  return (
    <div className='m-12'>
      <h2 className="text-5xl">Best prices in the town</h2>
      <div className='grid  lg:grid-cols-3 gap-6'>
      {priceOptions.map(option => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
      </div>
    </div>
  );
};

export default PriceOptions;
