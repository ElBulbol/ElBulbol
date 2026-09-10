import { certifications } from './certifications.js';
import { contacts } from './contacts.js';
import { currentLearning } from './currentLearning.js';
import { experience } from './experience.js';
import { mentorship } from './mentorship.js';
import { projects } from './projects.js';

const file = (content) => ({ type: 'file', content });
const dir = (children) => ({ type: 'dir', children });
const secret = () => ({ type: 'secret', children: {} });

const aboutText = `Belal Mohamed Amin Alshref
// Builder. Geek. Analyst.

I'm a Computer Science student, cybersecurity enthusiast, Linux/open-source
geek, and builder. My main interests lie at the intersection of security,
networking, programming, and open-source technology.

I like going deep, understanding how things work beneath the surface rather
than simply using them. The terminal is where I'm most at home.

My work spans cybersecurity, systems, networking, and hands-on
experimentation. I also co-founded OSC-MUST (https://osc-must.github.io/OSC-MUST/),
where I serve as Technical Lead to share what I learn about Linux, Git, and
open source.`;

const experienceDir = () => {
  const children = {};
  experience.forEach((item) => {
    children[`${item.id}.txt`] = file(
      `${item.organization} \u2014 ${item.role}\n${item.location} \u00b7 ${item.dates}${item.status ? `\nstatus: ${item.status}` : ''}\n\n${item.summary}\n\n${item.detail}`
    );
  });
  return dir(children);
};

const projectsDir = () => {
  const children = {};
  projects.forEach((project) => {
    const lines = [
      project.title,
      project.role ? `role: ${project.role}` : null,
      project.date ? `date: ${project.date}` : null,
      '',
      project.shortDescription,
      project.tech ? `\ntech: ${project.tech.join(', ')}` : null,
      project.github ? `github: ${project.github}` : null,
      project.liveDemo ? `demo: ${project.liveDemo}` : null,
    ].filter(Boolean);
    children[`${project.slug}.txt`] = file(lines.join('\n'));
  });
  return dir(children);
};

const certificationsText = certifications
  .map((cert) => {
    const status = cert.status === 'in_progress'
      ? `IN PROGRESS (expected ${cert.expected})`
      : `VERIFIED \u2014 ${cert.date}`;
    return `${cert.title}\nissuer: ${cert.issuer}\nstatus: ${status}${cert.verifyUrl ? `\nverify: ${cert.verifyUrl}` : ''}`;
  })
  .join('\n\n');

const skillsText = currentLearning
  .map((item) => `${item.track} \u2014 ${item.status.toUpperCase()}\n${item.focus}\ntools: ${item.tools.join(', ')}${item.note ? `\nnote: ${item.note}` : ''}`)
  .join('\n\n');

const mentorshipText = `${mentorship.role} @ ${mentorship.org}
${mentorship.location} \u00b7 ${mentorship.period}

${mentorship.stats.map((stat) => `${stat.value} ${stat.label}`).join('\n')}

topics:
${mentorship.topics.map((topic, i) => `  ${i + 1}. ${topic}`).join('\n')}

"${mentorship.philosophy}"`;

const contactText = contacts
  .map((contact) => `${contact.label}: ${contact.value} (${contact.url})`)
  .join('\n');

export const terminalFS = dir({
  'about.txt': file(aboutText),
  'contact.txt': file(contactText),
  'certifications.txt': file(certificationsText),
  experience: experienceDir(),
  projects: projectsDir(),
  skills: dir({ 'currently_working_on.txt': file(skillsText) }),
  mentorship: dir({ 'osc-must.txt': file(mentorshipText) }),
  '.config': dir({ belal_XD: secret() }),
});
