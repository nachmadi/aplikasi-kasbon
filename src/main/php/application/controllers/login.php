<?php

if (!defined('BASEPATH'))
exit('No direct script access allowed');

/**
 * Login
 *
 * @author Endy Muhardin
 *
 */
class Login extends CI_Controller {

	function __construct() {
		parent::__construct();
	}

	/**
	 * Index Page for this controller.
	 *
	 */
	public function index() {
		$this->load->view('login_view');
	}

}

/* End of file login.php */
/* Location: ./application/controllers/login.php */
