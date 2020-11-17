import nodemailer from 'nodemailer';
import {config} from '../config/main';

export default nodemailer.createTransport(config);