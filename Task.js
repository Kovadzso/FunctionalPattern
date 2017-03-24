let auto = (function(){
	//static stuffs
	let licenceCategory = "B";
	auto.getRequiredLicenseCategory = function(){
		return `License categori is: ${licenceCategory}`;
	};
	let maxPassengers = 9;
	
	
	function auto(maxspeed,speedUnit){
		let self = {},
			_maxSpeed = maxspeed || 0,
			_speed = 0,
			_speedUnit = speedUnit || "km/h",
			_isEngineOn = false;
			
		createPublicAPI();
		function createPublicAPI(){
			Object.assign(self,{
				getMaxSpeed:function(){
					return _maxSpeed;
				},
				getSpeed:function(){
					return _speed + " " + _speedUnit;
				},
				setSpeed:function(speed){
					_speed = speed;
				},
				getSpeedUnit:function(){
					return _speedUnit;
				},
				getEngineStatus:function(){
					return _isEngineOn;
				},
				turnEngineOn:function(){
					_isEngineOn = true;
				},
				turnEngineOff:function(){
					_isEngineOn = false;
				},
				getMaxPassengers:function(){
					return `Number of max. passengers is: ${maxPassengers}`;
				}
				
			});
		}
		return self
	}
	return auto;
})();


let cabriolet = function(maxspeed,speedUnit){
	let self = auto(maxspeed,speedUnit);
	let isRoofCollapsed = false;
	let szuper = Object.assign({},self);
	createPublicAPI();
	
	function createPublicAPI(){
		Object.assign(self,{
			//new method
			collapseRoof:function(){
				isRoofCollapsed = true;
			},
			//new method
			raiseRoof:function(){
				isRoofCollapsed = false;
			},
			getRoofStatus:function(){
				return isRoofCollapsed;
			},
			//override parent method
			setSpeed:function(speed){
				szuper.setSpeed(speed+20);
			}
		})
	}
	
	return self;
};