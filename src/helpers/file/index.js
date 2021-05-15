import { BASE_URL } from '../../config/api';

const getFile = (fileName) => `${BASE_URL}/file/${fileName}`;

export { getFile };
