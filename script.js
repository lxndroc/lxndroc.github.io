const Portfolio = function() {
	function makeWords() {
		return [
			{ text: "Python",		weight: 15	},
			{ text: "Java",			weight: 13	},
			{ text: "HTML5",		weight: 10	},
			{ text: "CSS3",			weight: 8	},
			{ text: "C++",			weight: 7	},
			{ text: "SQL",			weight: 7 	},
			{ text: "JavaScript",	weight: 5 	}
		];
	}

	function makeWordCloud(words) {
		let delay_ms = 250;
		$('.tuition-domains').jQCloud(words, {delay: delay_ms});
	}

	function displayWordCloud() {
		let count = 1;
		$(window).on('scroll', function() {
			let y_scroll_pos = window.pageYOffset;
			let scroll_pos_test = 2700;
			if (y_scroll_pos > scroll_pos_test && count == 1) {
				makeWordCloud(makeWords());
				++count;
			}
		});
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Online Python Tutor",
				"help IT Professionals land their dream developer job",
				"work on projects with tutees"
			],
			stringsElement: null,
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return { displayWordCloud, typeAnimation }
}();

Portfolio.displayWordCloud();
Portfolio.typeAnimation();