import PropTypes from 'prop-types';

/**
 * A React functional component that displays account information.
 * @param {Object} props
 * @param {Object} props.account
 * @param {string} props.account.title
 * @param {number} props.account.amount
 * @param {string} props.account.description
 * @returns {JSX.Element}
 */
const Account = ({ account }) => {
  const { title, amount, description } = account;
  // for phase 2 : we may create a function 'openTransactions' with accountId as param
  // this function will be set to the button
  // this function could call an async function of slicer.
  // the endpoint would look something like this : /accounts/{idAccount}/transactions/{currentMonth}
  return (
    <section className='account'>
      <div className='account__content-wrapper'>
        <h3 className='account__title'>{title}</h3>
        <p className='account__amount'>${amount.toLocaleString('en-US')}</p>
        <p className='account__description'>{description}</p>
      </div>
      <div className='account__content-wrapper cta'>
        <button className='account__transaction-button'>
          View transactions
        </button>
      </div>
    </section>
  );
};
Account.propTypes = {
  account: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
    description: PropTypes.string,
  }).isRequired,
};
export default Account;
