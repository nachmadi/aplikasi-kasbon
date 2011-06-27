<?php

if (!defined('BASEPATH'))
exit('No direct script access allowed');

/**
 * Process controller
 *
 * @property auth $auth
 *
 * @author Anton Raharja
 *
 */
class Process extends CI_Controller {

	function __construct() {
		parent::__construct();
                $this->load->library(array('oborci/Auth', 'uri'));
	}

	/**
	 * Index Page for this controller.
         * @param string $param Is 'ajax' or NULL
	 *
	 */
	public function index($param=NULL) {
		redirect('welcome');
	}

	/**
	 * Process login
         * @param string $param Is 'ajax' or NULL
	 */
	public function login($param=NULL) {
		$username = $this->input->post('j_username');
		$password = $this->input->post('j_password');
                if (! (empty($username) && empty($password))) {
                        if ($this->auth->authenticate($username, $password)) {
                                if ($this->auth->login()) {
                                        $data['output']['success'] = TRUE;
                                        $data['output']['message'] = t('Login successful');
                                } else {
                                        $data['output']['success'] = FALSE;
                                        $data['output']['message'] = t('Login successful but an error has occured');
                                }
                        } else {
                                $data['output']['success'] = FALSE;
                                $data['output']['message'] = t('Invalid login');
                        }
                } else {
                        $data['output']['success'] = FALSE;
                        $data['output']['message'] = t('Please input username and password');
                }
                // log_message('debug', "username:$username password:$password data:".print_r($data, TRUE));
                $this->load->view('json_view', $data);
	}

	/**
	 * Process logout
         * @param string $param Is 'ajax' or NULL
	 */
	public function logout($param=NULL) {
		$this->auth->logout();
                redirect('welcome');
	}

	/**
	 * Process unauthorized
         * @param string $param Is 'ajax' or NULL
	 */
	public function unauthorized($param=NULL) {
                $this->auth->logout();
                redirect('welcome');
	}

}

/* End of file process.php */
/* Location: ./application/controllers/process.php */
