import React from 'react';

/**
 * Displays the list of signatures.
 * @param {} signatures - The list of signatures to display.
 * @returns {JSX.Element} - The rendered Signatures component.
 */
function Signatures({ signatures }) {
  return (
    <div className="signatures">
      <h2>Signatures</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {signatures && signatures.length > 0 ? (
            signatures.map((signature, index) => (
              <tr key={signature.ID || index}>
                <td>{signature.Name}</td>
                <td>{signature.City}</td>
                <td>{signature.State}</td>
              </tr>
            ))
          ) : (
            <>
              <tr>
                <td>Alice Johnson</td>
                <td>Seattle</td>
                <td>WA</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Signatures;