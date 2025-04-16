const Form3 = () => {
    return (
        <form action="https://formspree.io/f/xjkvkewq" method="POST" className="cs_contact_form">
            <h2 className="text-center cs_fs_36 cs_semibold">Get In Touch</h2>
            <input type="text" name="name" className="cs_form_field cs_mb_22" placeholder="Your Name" />
            <input type="email" name="email" className="cs_form_field cs_mb_22" placeholder="Your Email" />
            <input type="text" name="service" className="cs_form_field cs_mb_22" placeholder="What service are you interested in?" />
            <textarea name="message" cols="30" rows="4" className="cs_form_field cs_mb_22" placeholder="Write Message..."></textarea>
            <button className="cs_btn cs_style_1 w-100" type="submit"><span>Send</span></button>
        </form>
    );
};

export default Form3;