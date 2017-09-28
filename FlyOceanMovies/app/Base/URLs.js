
const REQUEST_URL = 'https://api.douban.com/v2';
const REQUEST_URL_MOVIE = `${REQUEST_URL}/movie`;
const REQUEST_URL_TOP250 = `${REQUEST_URL_MOVIE}/top250`;
const REQUEST_URL_NEW = `${REQUEST_URL_MOVIE}/in_theaters`;
const REQUEST_URL_SOON = `${REQUEST_URL_MOVIE}/coming_soon`;
const REQUEST_URL_US_BOX = `${REQUEST_URL_MOVIE}/coming_soon/us_box`
const REQUEST_URL_SEARCH = `${REQUEST_URL_MOVIE}search?q=`;
const REQUEST_URL_DETAIL = `${REQUEST_URL_MOVIE}/subject/`;

export default URLs = {
    REQUEST_URL_TOP250,
    REQUEST_URL_NEW,
    REQUEST_URL_SOON,
    REQUEST_URL_US_BOX,
    REQUEST_URL_SEARCH,
    REQUEST_URL_DETAIL
}