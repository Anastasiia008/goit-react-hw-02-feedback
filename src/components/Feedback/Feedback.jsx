import PropTypes from 'prop-types';
import css from './Feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <>
    <div className={css.buttons}>
        {options.map(option => {
            return (
                <button
                    className={css.btn}
                    type="button"
                    onClick={() => onLeaveFeedback(option)}
                    key={option}>
                {option}
                </button>
                );
                }
            )
        }
    </div>
</>
);
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;