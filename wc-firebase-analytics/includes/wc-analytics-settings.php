<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
/* Add Analytic Settings */
$msg = '';
if ( isset( $_POST['firebase_analytics_nonce'] ) && wp_verify_nonce(sanitize_key( $_POST['firebase_analytics_nonce'] ), 'appmaker_firebase_analytics' ) ) {
	if ( isset( $_POST['firebase_analytics'] ) ) {
		$analytic_settings = '';
		
		if ( isset( $_POST['webc_fb_apiKey'] ) ) {
			$webc_fb_apiKey = $_POST['webc_fb_apiKey'] ;
		}	

		if ( isset( $_POST['webc_fb_authDomain'] ) ) {
			$webc_fb_authDomain = $_POST['webc_fb_authDomain'] ;
		}	

		if ( isset( $_POST['webc_fb_projectId'] ) ) {
			$webc_fb_projectId = $_POST['webc_fb_projectId'] ;
		}	

		if ( isset( $_POST['webc_fb_storageBucket'] ) ) {
			$webc_fb_storageBucket = $_POST['webc_fb_storageBucket'] ;
		}	

		if ( isset( $_POST['webc_fb_messagingSenderId'] ) ) {
			$webc_fb_messagingSenderId = $_POST['webc_fb_messagingSenderId'] ;
		}	

		if ( isset( $_POST['webc_fb_appId'] ) ) {
			$webc_fb_appId = $_POST['webc_fb_appId'] ;
		}	

		if ( isset( $_POST['webc_fb_measurementId'] ) ) {
			$webc_fb_measurementId = $_POST['webc_fb_measurementId'] ;
		}	

		update_option( 'webc_fb_apiKey', wp_unslash( $webc_fb_apiKey ) );
		update_option( 'webc_fb_authDomain', wp_unslash( $webc_fb_authDomain ) );
		update_option( 'webc_fb_projectId', wp_unslash( $webc_fb_projectId ) );
		update_option( 'webc_fb_storageBucket', wp_unslash( $webc_fb_storageBucket ) );
		update_option( 'webc_fb_messagingSenderId', wp_unslash( $webc_fb_messagingSenderId ) );
		update_option( 'webc_fb_appId', wp_unslash( $webc_fb_appId ) );
		update_option( 'webc_fb_measurementId', wp_unslash( $webc_fb_measurementId ) );

		// if ( ! empty( $analytic_settings ) ) {
		// 	$msg = 'Settings are updated successfully!';
		// } else {
		// 	$msg = 'Adding Firebase scripts are mandatory!';
		// }
	}
}
?>

<h1><?php esc_html_e( 'Enter your firebase details below below:', 'fbsanwoo' ); ?></h1>
<?php
if ( ! empty( $msg ) ) {
	esc_html_e( $msg, 'fbsanwoo' );
}
?>
<form method="post" name="firebase_analytics" id="firebase_analytics" class="validate" novalidate="novalidate">
   <?php wp_nonce_field( 'appmaker_firebase_analytics', 'firebase_analytics_nonce' ); ?>
	<table class="form-table">
	<tbody>

		<tr>
			<td><?= __("apiKey") ?></td>
			<td><input type="text" name="webc_fb_apiKey" value="<?php esc_html_e( get_option( 'webc_fb_apiKey' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("authDomain") ?></td>
			<td><input type="text" name="webc_fb_authDomain" value="<?php esc_html_e( get_option( 'webc_fb_authDomain' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("projectId") ?></td>
			<td><input type="text" name="webc_fb_projectId" value="<?php esc_html_e( get_option( 'webc_fb_projectId' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("storageBucket") ?></td>
			<td><input type="text" name="webc_fb_storageBucket" value="<?php esc_html_e( get_option( 'webc_fb_storageBucket' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("messagingSenderId") ?></td>
			<td><input type="text" name="webc_fb_messagingSenderId" value="<?php esc_html_e( get_option( 'webc_fb_messagingSenderId' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("appId") ?></td>
			<td><input type="text" name="webc_fb_appId" value="<?php esc_html_e( get_option( 'webc_fb_appId' ) ); ?>"></td>
		</tr>
		<tr>
			<td><?= __("measurementId") ?></td>
			<td><input type="text" name="webc_fb_measurementId" value="<?php esc_html_e( get_option( 'webc_fb_measurementId' ) ); ?>"></td>
		</tr>
	

	</table>
	<p class="submit"><input type="submit" name="firebase_analytics" id="firebase_analytics" class="button button-primary" value="<?php esc_html_e( 'Save settings', 'fbsanwoo' ); ?>"></p>
</form>
</div>
