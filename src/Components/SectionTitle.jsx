
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto mt-10 w-60 text-center">
            <h1 className="border-b-2 text-yellow-200 italic">{heading}</h1>
            <h1 className="border-b-2 text-2xl uppercase">{subHeading}</h1>
        </div>
    );
};

export default SectionTitle;