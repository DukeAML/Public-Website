import React from 'react';

class GPUInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="gpu-sub-header">
          <center>What is a GPU? </center>
          <br />
        </div>
        <p>
          While many of you may not care much about the hardware on your
          computer, the meat and bones of your computer are what make it run.
          The brain of your computer is the CPU (central processing unit) which
          is responsible for keeping all your programs running, understanding
          mouse clicks and key strokes, as well as loading and saving from it's
          cache.
          <br />
          <br />
          When you see that your computer has 16-GB of RAM (random access
          memory), that's saying how much memory your CPU has directly on it
          (i.e. the bigger that number is, the less times your CPU needs to go
          to your really big memory, which takes a lot more time, slowing down
          your computer).
          <br />
          <br />
          CPUs have just a few cores and can handle a few threads (or
          simultaneous software operations) at once, a GPU, on the other hand,
          has thousands of cores and handle thousands of threads, and thus
          thousands of operations, simulataneously.
          <br />
          <br />
          Originally great for video games (where there are just so many things
          changing every time your character looks in another direction...
          lighting, scene, updating objects, etc.), GPUs have found their,
          arguably, more communally productive uses.
          <br />
          <br />
          GPUs have ignited a worldwide AI boom. They’ve become a key part of
          modern supercomputing. They’ve been woven into a sprawling new
          hyperscale data centers. Still prized by gamers, they’ve become
          accelerators speeding up all sorts of tasks from encryption to
          networking to AI.
          <br />
          <br />
          And they continue to drive advances in gaming and pro graphics inside
          workstations, desktop PCs and a new generation of laptops.
          <br />
          <br />
          While GPUs are now about a lot more than the PCs in which they first
          appeared, they remain anchored in a much older idea called parallel
          computing. And that’s what makes GPUs so powerful.
          <br />
          <br />
          CPUs, to be sure, remain essential. Fast and versatile, CPUs race
          through a series of tasks requiring lots of interactivity. Calling up
          information from a hard drive in response to user’s keystrokes, for
          example.
          <br />
          <br />
          By contrast, GPUs break complex problems into thousands or millions of
          separate tasks and work them out at once.
          <br />
          <br />
          That makes them ideal for analyzing hundreds of thousands of images of
          cancer or looking at millions of timeseries radio-frequency
          datapoints, where the there are thousands of identical operations to
          be performed on each piece of data.
          <br />
          <br />
          But GPUs don't need to be in your computer in order for you to use
          them, and good thing, because a nice GPU can run you into the
          $10,000s, the rise of cloud computing allows you to tap into GPUs in a
          rack on shelf in the basement of Google or Amazon or Duke and run your
          program there.
          <br />
          <br />
          These GPUs sitting on a rack in a closet are broken up into Clusters.
          Generally segmented in whatever way makes the most sense to the
          operator, this allows for hundreds or thousands of these to sit
          underground in a warehouse but still be broken up by "owner."
          <br />
          <br />
          If you want to learn more about how a GPU works check this out:
          <br />
          <a
            target="_blank"
            href="https://computer.howstuffworks.com/graphics-card1.htm">
            {' '}
            https://computer.howstuffworks.com/graphics-card1.htm
          </a>
          <br />
          <br />
          If you want to understand cloud computing start here: <br />
          <a
            target="_blank"
            href="https://www.fastmetrics.com/blog/tech/what-is-cloud-computing/">
            https://www.fastmetrics.com/blog/tech/what-is-cloud-computing/
          </a>
        </p>
        <br />
        <div className="gpu-sub-header">
          <center>Clusters and GPUs at Duke</center>
          <br />
        </div>
        <p>
          Duke has many thousands of GPUs owned by one person or another, mostly
          concentrated with ECE, CS, and Statistics and faculty in these
          departments. These GPUs are accessible by them and them only, although
          they have the ability to give access to whoever they feel needs it.
          <br /> <br />
          Individual faculty members may give access to researchers in their
          labs while the departments give out access based on what project a
          student may be working on, for example, if you end up doing Data+, you
          probably got access to the CS GPU cluster. <br /> <br />
          Now, as a student who wants to work on something else entirely, it
          would be unlikely a faculty member or department would casually give
          you access to their cluster, for good reason. While a few thousand may
          sound like quite a few GPUs, people are always fighting for more as
          nearly all high-level computation requires them. <br /> <br />
          To address this issue, Dr. Larry Carin, Dr. John Board, Mark McCahill,
          and Luke Truitt put together a $45,000 grant to allow only
          undergraduates to access world class GPUs for side projects,
          classwork, and independent research. <br /> <br />
          The way you get access to these is reserving a Docker Container from
          vm-manage, OITs container management service. Once you have reserved
          one, you will be operating a subset of the GPUs available on the
          cluster in your browser. Run everything just as you would run it on
          your own machine but with $45,000 worth of GPUs to back you up. <br />
          <br />
          1. Go to vm-manage.oit.duke.edu <br />
          2. Find Undergraduate on the list <br />
          3. Click Reserve <br />
          4. Explore the wonderfully built service OIT has provided you
          <br />
          <br />
          Beyond this, if you are working on projects with multiple people and
          you need to be able to share data, there is a ```shared_data``` folder
          at the root of the machine. The contents of this folder are shared
          across all container instances. <br /> <br />
          Have fun! And let us know about the project you're using the GPUs for
          here: <br />
          <a target="_blank" href="https://forms.gle/GuQVgpFJe92A1k1M6">
            https://forms.gle/GuQVgpFJe92A1k1M6
          </a>
          <br /> <br />
          Read about the grant:
          <br />
          <a
            target="_blank"
            href="https://pratt.duke.edu/about/news/new-dawn-duke-data-scavengers">
            https://pratt.duke.edu/about/news/new-dawn-duke-data-scavengers
          </a>
          <br /> <br />
          If you have questions or comments email{' '}
          <a href="mailto:lot@duke.edu">lot@duke.edu</a>
        </p>
      </div>
    );
  }
}

export default GPUInfo;
