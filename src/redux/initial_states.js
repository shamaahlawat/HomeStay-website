export const initialStates = {

	page_details: {
		page_title: "PoleTalks",
		current_page: null,
		page_load_error: false,
		show_full_page_loader: false,
		loaders: {
			page_loading: false,
			item_loading: false,
			sub_item_loading: false
		},
		device_details: {
			lang: 'en',
			device_data: {},
		},
	},

	store_details: {
		name: "",
		channel_name:"",
		image:"",
		background_image:"",
		tagline:"",
		store_description: "",
		store_type: "homestay",
		sub_type: "",
		location:[],
		location_name: "",
		formatted_address: "",
		address_1: "",
		address_2: "",
		city: "",
		country: "",
		state: "",
		zipcode: "",
		place_id: "",
		google_id: "",
		owner_name: "",
		email:"",
		phone_number: "91",
		category: "HOMESTAY",
		//parent_store_id: "59a25aa9ee6470b9354b1e09" //prod
		// parent_store_id: "59b23e857625e882322d4313" //test
		parent_store_id: "59025262bda86aec36d39dc5" //local
	}
};
