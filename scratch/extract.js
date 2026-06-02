import fs from 'fs';
import path from 'path';

function cleanHTML(html) {
  // Remove script and style elements and their content
  let text = html.replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, '');
  // Remove HTML comments
  text = text.replace(/<!--[\s\S]*?-->/g, '');
  // Replace HTML tags with newlines
  text = text.replace(/<[^>]+>/g, '\n');
  // Decode some common HTML entities
  text = text.replace(/&amp;/g, '&')
             .replace(/&lt;/g, '<')
             .replace(/&gt;/g, '>')
             .replace(/&quot;/g, '"')
             .replace(/&#8211;/g, '-')
             .replace(/&#8217;/g, "'")
             .replace(/&#8220;/g, '"')
             .replace(/&#8221;/g, '"')
             .replace(/&nbsp;/g, ' ')
             .replace(/&#038;/g, '&');
  // Collapse multiple whitespace/newlines
  text = text.split('\n')
             .map(line => line.trim())
             .filter(line => line.length > 0)
             .join('\n');
  return text;
}

try {
  const homePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\da44af43-32d2-45bd-be74-10b1ce75e978\\.system_generated\\steps\\687\\content.md';
  const presencePath = 'C:\\Users\\ASUS\\.gemini\\antigravity\\brain\\da44af43-32d2-45bd-be74-10b1ce75e978\\.system_generated\\steps\\689\\content.md';

  if (fs.existsSync(homePath)) {
    const homeHtml = fs.readFileSync(homePath, 'utf8');
    const homeText = cleanHTML(homeHtml);
    fs.writeFileSync('c:\\Users\\ASUS\\Desktop\\masmena-1\\scratch\\homepage_text.txt', homeText);
    console.log('Homepage text extracted successfully.');
  } else {
    console.log('Homepage HTML file not found at: ' + homePath);
  }

  if (fs.existsSync(presencePath)) {
    const presenceHtml = fs.readFileSync(presencePath, 'utf8');
    const presenceText = cleanHTML(presenceHtml);
    fs.writeFileSync('c:\\Users\\ASUS\\Desktop\\masmena-1\\scratch\\presence_text.txt', presenceText);
    console.log('Presence Management text extracted successfully.');
  } else {
    console.log('Presence HTML file not found at: ' + presencePath);
  }
} catch (e) {
  console.error('Error running extraction:', e);
}
