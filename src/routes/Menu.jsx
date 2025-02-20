import React from 'react';
// import CollapseButton from '../Layout/components/CollapseButton';
import {Collapse, Typography} from '@material-tailwind/react';

export default function Menu() {

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <main className="wrapper-outer">
      <div className=' max-sm:w-auto md:w-[600px] p-4 rounded-xl bg-[#F6EFEF]'>
        <button className='text-2xl text-[#2A2A2A] uppercase underline' onClick={toggleOpen}>Test</button>
          <Collapse open={open}>
            <Typography>
              Testing test
            </Typography>
          </Collapse>
          </div>
    </main>
  );
}
