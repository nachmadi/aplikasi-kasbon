<?php

if (!defined('BASEPATH'))
exit('No direct script access allowed');

/**
 * Dashboard
 *
 * @author Endy Muhardin
 *
 */
class Dashboard extends CI_Controller {

	function __construct() {
		parent::__construct();
	}

	/**
	 * Index Page for this controller.
	 *
	 */
	public function index() {
		$this->load->view('dashboard_view');
	}

}

/* End of file dashboard.php */
/* Location: ./application/controllers/dashboard.php */
