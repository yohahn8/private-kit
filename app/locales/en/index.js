import intro from './intro.json';
import locationTracking from './locationTracking.json';
import importFile from './import.json';
import exportFile from './exportscreen.json';
import licensesFile from './licensesscreen.json';
import overlapFile from './overlap.json';
import notificationFile from './notification.json';
import locationService from './locationService.json';
import settingsFile from './settingsScreen.json';

export default {
  ...intro,
  ...locationTracking,
  ...importFile,
  ...exportFile,
  ...overlapFile,
  ...licensesFile,
  ...notificationFile,
  ...locationService,
  ...settingsFile
};
