/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */
/* eslint-disable no-undef */
import '@babel/polyfill';
import { calcHrs } from './src/utils/utils';

const puppeteer = require('puppeteer');

test('unit test', () => {
  const timeDifference = calcHrs('11am', '5pm');
  expect(timeDifference).toBe(6);
});


test('integration test', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Users/91882/AppData/Local/Chromium/Application/chrome.exe',
    args: ['--start-maximized'],
    // slowMo: 1000,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 722 });
  await page.goto('http://localhost:3000/');
  await page.click('.Navbar ul li:nth-child(2) a');
  await page.select('select', '12pm');
  await page.select('select:nth-of-type(2)', '5pm');
  await page.focus('input');
  await page.keyboard.type('04042020');
  await page.click('button');
  const date = await page.$eval('.date-val', (el) => el.textContent);
  const cartTotal = await page.$eval('.total-value', (el) => el.textContent);
  expect(cartTotal).toBe('4000');
  expect(date).toBe('4/4/2020');
  browser.close();
}, 100000);

test('end to end test', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:/Users/91882/AppData/Local/Chromium/Application/chrome.exe',
    args: ['--start-maximized'],
    // slowMo: 500,
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1536, height: 722 });
  await page.goto('http://localhost:3000/');
  const addService = async (category, serivceNumber, from, to, date) => {
    await page.click(`.Navbar ul li:nth-child(${category}) a`);
    await page.select(`.service-card:nth-of-type(${serivceNumber}) select`, from);
    await page.select(`.service-card:nth-of-type(${serivceNumber}) select:nth-of-type(2)`, to);
    await page.focus(`.service-card:nth-of-type(${serivceNumber}) input`);
    await page.keyboard.type(date);
    await page.click(`.service-card:nth-of-type(${serivceNumber}) button`);
  };
  await addService(1, 2, '11am', '4pm', '28032020');
  await addService(2, 1, '12pm', '2pm', '29032020');
  await addService(3, 3, '5pm', '8pm', '30032020');
  const cartTotal = await page.$eval('.total-value', (el) => el.textContent);

  expect(cartTotal).toBe('3900');
  browser.close();
}, 100000);
