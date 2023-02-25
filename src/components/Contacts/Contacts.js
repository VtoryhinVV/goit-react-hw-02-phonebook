import PropTypes from 'prop-types';
export function Contacts({ contactsInfo }) {
  return (
    <div>
      <ul>
        {contactsInfo().map(({ id, name, number }) => (
          <li key={id}>
            <p>
              <span>{name}</span> : <span>{number}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contactsInfo: PropTypes.func.isRequired,
  // handlDelete: PropTypes.func.isRequired,
};
