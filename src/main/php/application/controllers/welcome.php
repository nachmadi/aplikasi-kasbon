<?php

if (!defined('BASEPATH'))
exit('No direct script access allowed');

/**
 * Home controller for billing application
 *
 * @property auth $auth
 *
 * @author Anton Raharja
 *
 */
class Welcome extends CI_Controller {

	function __construct() {
		parent::__construct();
                $this->load->library(array('oborci/Auth'));
		$this->auth->validate();
	}

	/**
	 * Index Page for this controller.
         * @param string $param Is 'ajax' or NULL
	 *
	 */
	public function index($param=NULL) {
                if ($this->auth->get_access()) {
                        $this->load->view('dashboard_view');
                } else {
                        $this->load->view('login_view');
                }
	}
                
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
