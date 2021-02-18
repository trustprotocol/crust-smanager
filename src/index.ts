// TODO: Add README
import {argv} from 'process';
import DecisionEngine from './decision';
import {logger} from './log';

const chainAddr = argv[2] || 'ws://localhost:9944';
const ipfsAddr = argv[3] || 'http://localhost:5001';
const sworkerAddr = argv[4] || 'http://localhost:12222';
// disable/isolation/member
const nodeId = argv[5] || 'isolation';
const chainAccount = argv[6] || '';
const ipfsTimeout = 8000 * 1000; // 8000s
const sworkerTimeout = 8000 * 1000; //8000s

logger.info(`Comming Soon`);
