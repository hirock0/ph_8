const Footer = () => {
  return (
    <footer className=" mt-10 bg-base-200  ">
      <div className=" footer text-base-content container mx-auto px-5 py-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join max-sm:flex-col ">
              <input
                type="text"
                placeholder="username@site.com"
                className="sm:input sm:input-bordered sm:join-item max-sm:w-full max-sm:rounded-xl max-sm:h-12 max-sm:pl-2 "
              />
              <button className=" sm:btn sm:btn-primary sm:join-item max-sm:w-full max-sm:rounded-xl max-sm:h-12 max-sm:pl-2 max-sm:shadow-lg max-sm:mt-3 max-sm:bg-blue-700 max-sm:text-white max-sm:hover:bg-blue-800 max-sm:active:bg-blue-900">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
