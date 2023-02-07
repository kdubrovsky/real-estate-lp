// ------------ config import
import path from '../config/path.js';

// ------------ connecting plugin
import { deleteAsync } from 'del';

// ------------ clear destination folder task
const clear = () => {
    return deleteAsync(path.root);
};

export default clear;