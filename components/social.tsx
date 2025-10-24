import { Github, Email, LinkedIn } from './social-links';

export default function Social() {
  return (
    <div className="mt-4 flex justify-center">
      <div className="flex items-center gap-4">
        <Github />
        <Email />
        <LinkedIn />
      </div>
    </div>
  );
}
