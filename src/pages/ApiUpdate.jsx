import useEndpoint from '../hooks/useEndpoint';

const ApiUpdate = ({ endPoint, state }) => {
  return (
    <>
      {endPoint ? (
        <h3>
          loading{'  '}
          {endPoint}---{state}
        </h3>
      ) : (
        <h3>Waiting....</h3>
      )}
    </>
  );
};

export default ApiUpdate;
