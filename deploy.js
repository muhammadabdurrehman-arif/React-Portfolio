import { spawn } from 'child_process';

const email = `abdur_rehman_arif_${Math.floor(Math.random() * 100000)}@surge-portfolio.com`;
const password = `CyberSecurity2026!`;
const domain = `abdur-rehman-arif-${Math.floor(Math.random() * 10000)}.surge.sh`;

console.log(`Registering account: ${email}`);
console.log(`Targeting domain: ${domain}`);

const child = spawn('npx', ['surge', 'dist'], {
  cwd: process.cwd(),
  shell: true
});

let isEmailSent = false;
let isPasswordSent = false;
let isProjectSent = false;
let isDomainSent = false;

child.stdout.on('data', (data) => {
  const output = data.toString();
  process.stdout.write(output);
  
  if (output.toLowerCase().includes('email:') && !isEmailSent) {
    isEmailSent = true;
    child.stdin.write(email + '\n');
  }
  
  if (output.toLowerCase().includes('password:') && !isPasswordSent) {
    isPasswordSent = true;
    setTimeout(() => {
      child.stdin.write(password + '\n');
    }, 150);
  }
  
  if (output.toLowerCase().includes('project:') && !isProjectSent) {
    isProjectSent = true;
    setTimeout(() => {
      child.stdin.write('\n');
    }, 300);
  }
  
  if (output.toLowerCase().includes('domain:') && !isDomainSent) {
    isDomainSent = true;
    setTimeout(() => {
      child.stdin.write(domain + '\n');
    }, 450);
  }
});

child.stderr.on('data', (data) => {
  process.stderr.write(data.toString());
});

child.on('close', (code) => {
  console.log(`\nDeployment process finished with exit code ${code}`);
  if (code === 0) {
    console.log(`\n🎉 Success! Your website is live at: http://${domain}`);
  } else {
    console.log('\n❌ Deployment failed. Please review the logs above.');
  }
});
