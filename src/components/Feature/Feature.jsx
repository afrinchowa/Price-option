import PropTypes from "prop-types";

import { BsFillCloudCheckFill } from "react-icons/bs";
const Feature = ({feature}) => {
    return (
        <div>
            <p className="flex items-center"> <BsFillCloudCheckFill className="text-green-500 mr-2 "></BsFillCloudCheckFill>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
   feature: PropTypes.string,
  };
export default Feature;