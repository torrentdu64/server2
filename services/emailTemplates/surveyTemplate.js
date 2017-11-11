
const keys = require('../../config/keys');

module.exports = (survey) => {
    return `
    <html>
      <body>
        <div style="text-align: center;">
          <h2>my quetion</h2>
          <p> what do you want</p>
          <p> ${survey.body}</p>
          <div>
            <a href="${keys.redirectDomain}/surveys/thanks" >yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}/surveys/thanks" >no</a>
          </div>
        </div>
      </body>
    </html>
    `;
};
