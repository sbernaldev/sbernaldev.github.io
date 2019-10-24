/**
 * @param {string} gdoc `https://docs.google.com/document/d/xyz`
 */
function redirectTo(gdoc) {
    window.location = `${gdoc}/preview`;
};