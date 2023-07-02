const Author = () => {
    return (
        <div>
            <div className="flex">
            <h2 data-aos="flip-right" id="author-header">Who the f*ck is Mark Manson?</h2>
            </div>
            <div id="author" ></div>
            <img data-aos="flip-left" id='mark1' src="/manson1.png" alt="Mark Manson" />
            <article>
                <div className="flex">
                <p data-aos="flip-right" id="about-mark">
                Mark Manson is an American humor writer and blogger. After college, all he did was blog about life guidance, but after a while, he also began to write books. Manson writes for adults who desire self-improvement or people who just have too much stuff on their plate. He wants to give self-help advice while being humorous because he thinks advice is best presented in a fun manner. In his books, he depicts situations using profanity to make the text engaging with a serious outlook.
                </p>
                </div>
                <div className="flex">
                <p data-aos="flip-left" className="quote"><i>"Everyone and their TV commercial wants you to believe that the key to a
good life is a nicer job, or a more rugged car, or a prettier girlfriend, or a hot
tub with an inflatable pool for the kids. The world is constantly telling you
that the path to a better life is more, more, more—buy more, own more, make
more, f*ck more, be more."</i></p>
                </div>
            </article>
        </div>
    )
}
export default Author;