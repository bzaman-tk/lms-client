import { Fade, Slide, Zoom } from "react-awesome-reveal";

const ExtraSection = () => {
    return (
        <div className='container mx-auto py-12'>
            <Slide>
                <h1 className="text-3xl font-bold text-center mb-8 dark:text-gray-300">Our Happy Students</h1>
            </Slide>
            <div className="grid grid-cols-3 gap-12 w-10/12 mx-auto">
                <Zoom>
                    <div className="border p-5 rounded-md dark:bg-gray-800 dark:text-gray-400">
                        <div className="">
                            <h6 className='text-lg mb-5 font-bold text-green-500'><span>AWESOME!</span></h6>
                            <p>Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt vero eos et accusamus et iusto odio dignissimos ducimus</p>
                        </div>
                        <div className="mt-5 bg-green-500 justify-start items-center flex text-white flex-row-reverse">
                            <figure className="w-16">
                                <img src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/Depositphotos_40674935_original1.jpg" alt="" loading="lazy" />

                            </figure>
                            <div className="pr-5">
                                <h6 className="font-bold">Kira Sims</h6>
                                <span className=" ">Student</span>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="border p-5 rounded-md dark:bg-gray-800 dark:text-gray-400">
                        <div className="">
                            <h6 className='text-lg mb-5 font-bold text-orange-500 uppercase'><span>High Quality!</span></h6>
                            <p>Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt vero eos et accusamus et iusto odio dignissimos ducimus</p>
                        </div>
                        <div className="mt-5 bg-orange-500 justify-start items-center flex text-white flex-row-reverse">
                            <figure className="w-16">
                                <img src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/puberty1.jpg" alt="" loading="lazy" />

                            </figure>
                            <div className="pr-5">
                                <h6 className="font-bold">Kira Sims</h6>
                                <span className=" ">Student</span>
                            </div>
                        </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="border p-5 rounded-md dark:bg-gray-800 dark:text-gray-400">
                        <div className="">
                            <h6 className='text-lg mb-5 font-bold text-pink-500 uppercase'><span>So Simple!</span></h6>
                            <p>Vivamus fermentum ex quis imperdiet sodales. Sed aliquam nibh tellus, a rutrum turpis pellentesque ac. Nulla nibh libero, tincidunt vero eos et accusamus et iusto odio dignissimos ducimus</p>
                        </div>
                        <div className="mt-5 bg-pink-500 justify-start items-center flex text-white flex-row-reverse">
                            <figure className="w-16">
                                <img src="https://language-school.cmsmasters.net/wp-content/uploads/2015/07/single-student4.jpg" alt="" loading="lazy" />

                            </figure>
                            <div className="pr-5">
                                <h6 className="font-bold">Kira Sims</h6>
                                <span className=" ">Student</span>
                            </div>
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
};

export default ExtraSection;