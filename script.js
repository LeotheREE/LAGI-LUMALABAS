const categories = {
    "Engineering Economics": [
    {
        "question": "How is the capital recovery factor (A/P,i,n) related to the uniform series sinking fund factor (A/P,i,n)? i is the effective annual rate of return, and n is the number of periods.",
        "choices": ["(A/P,i,n) = (A/F,i,n) - i", "A/P,i,n) = (A/P,i,n) + n/n", "A/P,i,n) = (A/P,i,n)/i", "(A/P,i,n) = (A/F,i,n) + i"],
        "answer": "(A/P,i,n) = (A/F,i,n) + i"
    },
    {
        "question": "What is an annuity?",
        "choices": ["a series of uniform amounts over a period of time", "a lump sum at the end of the year", "an annual repayment of a loan", "the future worth of a present amount"],
        "answer": "a series of uniform amounts over a period of time"
    },
    {
        "question": "Which of the following expressions is incorrect?",
        "choices": ["The future worth of an annuity, (F/A,I,n) = 1/(A,F,i,n)", "(A/F,i,n)-i = (A/P,i,n)", "The future worth of a present amount, (F/P,I,n) = 1/(P,F,i,n)", "The future worth of an annuity, (P/A,I,n) = 1/(A,P,i,n)"],
        "answer": "(A/F,i,n)-i = (A/P,i,n)"
    },
    {
        "question": "When using net present worth calculations to compare two projects, which of the following could invalidate the calculation?",
        "choices": ["non-conventional cash flows", "evaluating over different time periods", "differences in the magnitudes of the projects", "mutually exclusive projects"],
        "answer": "evaluating over different time periods"
    },
    {
        "question": "Assuming 1 annual rate of return, n=number of years, F=future worth, and P=present worth, what is the future worth of a present amount P?",
        "choices": ["P(1+i)⁻ⁿ", "P(1+i)ⁱ", "P(1+i)ⁿ⁻¹", "P(1+i)ⁿ"],
        "answer": "P(1+i)ⁿ"
    },
    {
        "question": "What must two investments with the same present worth and unequal lives have?",
        "choices": ["Different salvage values", "Different equivalent uniform annual cash flows", "Identical salvage values", "Identical equivalent uniform annual cash flows"],
        "answer": "Different equivalent uniform annual cash flows"
    },
    {
        "question": "What is the formula for a straight-line depreciation rate?",
        "choices": ["average salvage value/estimated service life", "100% net salvage value/estimated service life", "net salvage value/estimated service life", "100% - % net salvage value/estimated service life"],
        "answer": "100% - % net salvage value/estimated service life"
    },
    {
        "question": "Which of the following is true regarding the minimum attractive rate of return used in judging proposed investments?",
        "choices": ["It is larger than the interest rate used to discount expected cash flow from investments.", "It is frequently a policy decision made by an organization's management.", "It is not relevant in engineering economy studies.", "It is the same for every organization."],
        "answer": "It is frequently a policy decision made by an organization's management."
    },
    {
        "question": "Which of the following statement is NOT correct?",
        "choices": ["Effective rate of return in options A, B and C is the difference between 12.55% and 12%.", "$1 compounded quarterly at 3% for n yr has a future value of (1.03)⁴ⁿ compounding quarterly at a nominal rate of 12%/yr is equivalent to compounding annually at a rate of 12.55%.", "Compounding quarterly at a nominal rate of 12%/yr is equivalent to compounding annually at a rate of 12.55%.", "A nominal rate of 12% per annum compounded quarterly is the same as 12%/4=3% quarter."],
        "answer": "Effective rate of return in options A, B and C is the difference between 12.55% and 12%."
    },
    {
        "question": "Which of the following situations has a conventional cash flow so that an internal rate of return can be safely calculated and used?",
        "choices": ["You invest in a safe dividend stock and receive dividends each year.", "You purchase a house and pay the bank in monthly installments.", "You lease a car and pay by the month.", "Your company undertakes a mining project in which the land must be reclaimed at the end of the project."],
        "answer": "You invest in a safe dividend stock and receive dividends each year."
    },
    {
        "question": "The economics order quantity (EOQ) is defined as the order that minimizes the inventory cost per unit time. Which of the following is not an assumption of the basic EOQ model with no shortages?",
        "choices": ["The entire reorder quantity is delivered instantaneously.", "There is an upper bound on the quantity ordered.", "There is a positive cost on each unit inventoried.", "The demand rate is uniform and constant."],
        "answer": "There is an upper bound on the quantity ordered."
    },
    {
        "question": "Which of the following events will cause the optimal lot size, given by the classic EOQ model with no shortages, to increase?",
        "choices": ["A decrease in demand", "An increase in demand", "Either option A or C", "A decrease in inventory carrying cost"],
        "answer": "Either option A or C"
    },
    {
        "question": "What is a borrower of a particular loan almost always required to do during repayment?",
        "choices": ["Repay the loan over an agreed-upon amount of time", "Both options A and C", "Pay exactly the same amount of principal each payment", "Pay exactly the same amount of interest each payment"],
        "answer": "Repay the loan over an agreed-upon amount of time"
    },
    {
        "question": "What is 'work in process' classified as?",
        "choices": ["an expense", "an asset", "a liability", "a revenue"],
        "answer": "an asset"
    },
    {
        "question": "What is the indirect product cost (IPC) spending variance?",
        "choices": ["The IPC volume-adjusted budget minus the total IPC absorbed", "The difference between the actual IPC and IPC absorbed", "The difference between the actual IPC and IPC volume-adjusted budget.", "The IPC volume-adjusted budget (fixed + (volume) (variable IPC rate))"],
        "answer": "The difference between the actual IPC and IPC volume-adjusted budget."
    },
    {
        "question": "Firm A uses full absorption costing while firm B uses variable product costing. How will the financial statements of these companies differ?",
        "choices": ["Firm A has a higher cost of goods sold and, therefore, a smaller profit.", "Firm A has a higher cost of goods sold, higher inventory value, and higher retained earnings.", "Firm A has a smaller cost of goods sold and a larger profit.", "Firm A has a smaller cost of goods sold, no change in inventory value and no change in retained earnings."],
        "answer": "Firm A has a higher cost of goods sold, higher inventory value, and higher retained earnings."
    },
    {
        "question": "How is the material purchase price variance defined?",
        "choices": ["(quantity purchased) (actual price) - (quantity purchased) (standard price)", "actual price - standard price) (quantity used)", "(quantity issued - standard price) (standard price)", "(quantity purchased - quantity used) (actual price)"],
        "answer": "(quantity purchased) (actual price) - (quantity purchased) (standard price)"
    },
    {
        "question": "Which of the following does not affect owner's equity?",
        "choices": ["License to start operation", "Expense to get license to start operation", "Dividends paid", "Invested capital"],
        "answer": "License to start operation"
    },
    {
        "question": "Higrow Company is planning to grow 30% during the next fiscal year. What has to increase if Higrow is to achieve their goal?",
        "choices": ["The ratio of total assets to equity", "The ratio of sales to total assets", "Any combination of A, B and C Sales=(sales)/(total assets)/(equity)", "Equity"],
        "answer": "Any combination of A, B and C Sales=(sales)/(total assets)/(equity)"
    },
    {
        "question": "Corporation is applying for a short-term loan. In reviewing Z Corporation's financial records, the banker finds a current ratio of 2.0, an acid test ratio of 0.5, and an accounts receivable period of 70d. What should the banker do?",
        "choices": ["Both options B and C", "Suggest that Z Corporation be more aggressive I collecting on its invoices", "Suggest that & Corporation lower its inventories", "Be concerned that 2 Corporation will be unable to meet the payments"],
        "answer": "Both options B and C"
    },
    {
        "question": "Companies A and B are identical except for their inventory accounting systems. Company A uses the last-in, first-cut convention while company B uses the first-in, first-out convention. How will their financial statements differ in an inflationary environment?",
        "choices": ["Company A's profits will be higher and the book value of their inventory will be higher than for company B.", "Company B's profits and inventory book value will be higher than for company A.", "Company B's profits will be higher than A's, but inventory book value will be lower.", "Company A's profits will be higher and the book value of their inventory will be lower than for company B."],
        "answer": "Company B's profits and inventory book value will be higher than for company A."
    },
    {
        "question": "What is the acid test ratio?",
        "choices": ["The ratio of all assets to total liabilities", "The ratio of gross margin to operating, sales, and administrative expenses", "The ratio of current assets (exclusive of inventory) to total current liabilities", "The ratio of owner's equity to total current liabilities"],
        "answer": "The ratio of current assets (exclusive of inventory) to total current liabilities"
    }

],

  "Fluid Statics and Dynamics": [
    {
        "question": "Which statement is true for a fluid?",
        "choices": [
            "It has a very regular molecular structure.",
            "It is a liquid only.",
            "It cannot sustain a shear force at rest.",
            "It cannot sustain a shear force."
        ],
        "answer": "It cannot sustain a shear force at rest."
    },
    {
        "question": "Which of the following is NOT a basic component of motion of a fluid element?",
        "choices": [
            "translation",
            "twist",
            "rotation",
            "angular distortion"
        ],
        "answer": "twist"
    },
    {
        "question": "Which of the following must be satisfied by the flow of any fluid, real or ideal? (I. Newton's second law of motion II. The continuity equation III. The requirement of a uniform velocity distribution IV. Newton's law of viscosity V. The principle of conservation of energy)",
        "choices": [
            "I, II, and IV",
            "I, II, III, and IV",
            "I, II, and V",
            "I, II, and III"
        ],
        "answer": "I, II, and V"
    },
    {
        "question": "For a fluid, viscosity is defined as the constant of proportionality between shear stress and what other variable?",
        "choices": [
            "Time derivative of pressure",
            "Spatial derivative of density",
            "Time derivative of density",
            "Spatial derivative of velocity"
        ],
        "answer": "Spatial derivative of velocity"
    },
    {
        "question": "Surface tension has which of the following properties? (I. It has units of force per unit length II. It exists whenever there is a density discontinuity III. It is strongly affected by pressure)",
        "choices": [
            "II only",
            "I only",
            "I and II",
            "III only"
        ],
        "answer": "I and II"
    },
    {
        "question": "A leak from a faucet comes out in separate drops. Which of the following is the main cause of this phenomenon?",
        "choices": [
            "surface tension",
            "viscosity",
            "gravity",
            "air resistance"
        ],
        "answer": "surface tension"
    },
    {
        "question": "If the shear stress in a fluid varies linearly with the velocity gradient, which of the following describes the fluid?",
        "choices": [
            "It is a Newtonian fluid",
            "It is a perfect gas",
            "It is Inviscid",
            "It is at a constant temperature"
        ],
        "answer": "It is a Newtonian fluid"
    },
    {
        "question": "How are lines of constant pressure in a fluid related to the force field?",
        "choices": [
            "They are perpendicular only to the force of gravity.",
            "They are perpendicular to the force field.",
            "They are at a 45° angle to the force field.",
            "They are parallel to the force field."
        ],
        "answer": "They are perpendicular to the force field."
    },
    {
        "question": "Which of the following statements about a streamline is most accurate?",
        "choices": [
            "It is defined for non-uniform flow only.",
            "It is a line normal to the velocity vector everywhere.",
            "It is fixed in space in steady flow.",
            "It is a path of a fluid particle."
        ],
        "answer": "It is fixed in space in steady flow."
    },
    {
        "question": "Which of the following describes a streamline? (I. It is a mathematical concept. II. It cannot be crossed by the flow. III. It is a line of constant entropy.)",
        "choices": [
            "I and II",
            "I only",
            "II only",
            "I and III"
        ],
        "answer": "I and II"
    },
    {
        "question": "Under what conditions is mass conserved in fluid flow?",
        "choices": [
            "The flow is adiabatic",
            "It is always conserved",
            "The fluid is baratropic",
            "The flow is isentropic"
        ],
        "answer": "It is always conserved"
    },
    {
        "question": "What is the absolute velocity of a real fluid at a surface?",
        "choices": [
            "The same as the bulk fluid velocity",
            "The velocity of the surface",
            "proportional to the smoothness of the surface",
            "zero"
        ],
        "answer": "The velocity of the surface"
    },
    {
        "question": "What is the origin of the energy conservation equation in flow systems?",
        "choices": [
            "the second law of thermodynamics",
            "Newton's second law of motion",
            "the first law of thermodynamics",
            "Newton's first law of motion"
        ],
        "answer": "the first law of thermodynamics"
    },
    {
        "question": "Which of the following is the basis for Bernoulli's law for fluid flow?",
        "choices": [
            "the continuity equation",
            "the principle of conservation of energy",
            "the principle of conservation of momentum",
            "the principle of conservation of mass"
        ],
        "answer": "the principle of conservation of energy"
    },
    {
        "question": "Under which of the following conditions is Bernoulli's equation valid?",
        "choices": [
            "the fluid must be incompressible",
            "all points evaluated must be on the same streamline",
            "the fluid must be in viscid",
            "all of the above"
        ],
        "answer": "all of the above"
    },
    {
        "question": "Under certain flow conditions, the expression for the first law of thermodynamics for a control volume reduces to Bernoulli's equation. (I. steady flow II. incompressible fluid III. no frictional losses of energy IV. no heat transfer or change in internal energy)",
        "choices": [
            "I only",
            "I and II",
            "I, II, III and IV",
            "I and IV"
        ],
        "answer": "I, II, III and IV"
    },
    {
        "question": "Which of the following ratios represents a physical interpretation of the Reynolds' number?",
        "choices": [
            "Re = buoyant forces/inertial forces.",
            "Re = viscous forces/inertial forces",
            "Re = inertial forces/viscous forces",
            "Re = drag forces/viscous forces"
        ],
        "answer": "Re = inertial forces/viscous forces"
    },
    {
        "question": "Which of the following statements is FALSE?",
        "choices": [
            "Steady flows do not change with time at any point.",
            "The Reynolds' number is the ratio of the viscous force to the inertial force.",
            "The Navier-Stokes equation is the equation of motion for the viscous newtonian fluid.",
            "Bernoulli's equation only holds on the same streamline."
        ],
        "answer": "The Reynolds' number is the ratio of the viscous force to the inertial force."
    },
    {
        "question": "From what were the curves of the Moody friction factor diagram for pipe flow determined?",
        "choices": [
            "experimental results of in viscous fluids",
            "experimental results of in viscid fluids",
            "theoretical solutions of the Navier-Stokes equations",
            "calculations based on potential flow"
        ],
        "answer": "experimental results of in viscous fluids"
    },
    {
        "question": "What is the most nearly the friction factor for flow in a circular pipe where the Reynolds' number is 1000?",
        "choices": [
            "0.008",
            "0.06",
            "0.1",
            "0.08"
        ],
        "answer": "0.06"
    },
    {
        "question": "For the pipe flow in the laminar region, how is the friction factor related to the Reynolds' number?",
        "choices": [
            "f∝(1/Re)²",
            "f∝Re",
            "f∝1/Re",
            "f∝Re²"
        ],
        "answer": "f∝1/Re"
    },
    {
        "question": "Which of the following flow meters measure(s) the average fluid velocity rather than a point or local velocity in a pipe? (I. venturi meter II. pitot tube III. impact tube IV. orifice meter V. hot-wire anemometer)",
        "choices": [
            "II only",
            "I only",
            "I and IV",
            "II and V"
        ],
        "answer": "I and IV"
    },
    {
        "question": "For fully developed laminar flow of fluids through circular pipes, the average velocity is what fraction of the maximum velocity?",
        "choices": [
            "¾",
            "¼",
            "⅛",
            "½"
        ],
        "answer": "½"
    }

],

  "Thermodynamics": [
    {
        "question": "Which of the following are intensive properties? (I. Temperature II. Pressure III. Composition IV. Mass)",
        "choices": ["I and II", "I, II, and III", "IV only", "I only"],
        "answer": "I, II, and III"
    },
    {
        "question": "How many independent properties are required to completely fix the equilibrium state of a pure gaseous compound?",
        "choices": ["3", "0", "2", "1"],
        "answer": "2"
    },
    {
        "question": "Which of the following thermodynamic relations is incorrect?",
        "choices": ["H = U + pV", "U = Q - W", "Tds = dH - Vdp", "Tds = du + pdV"],
        "answer": "U = Q - W"
    },
    {
        "question": "Which of the following relationships defines enthalpy?",
        "choices": ["h = pv + T", "h = u + p/v", "h = u + pv", "h = u + P/T"],
        "answer": "h = u + pv"
    },
    {
        "question": "Which of the following is true for water at a reference temperature where enthalpy is zero?",
        "choices": ["Entropy is nonzero.", "Internal energy is negative.", "Specific volume is zero.", "Vapour pressure is zero."],
        "answer": "Internal energy is negative."
    },
    {
        "question": "The compressibility factor, Z, is used for predicting the behavior of non-ideal gases. How is compressibility factor defined relative to an ideal gas?",
        "choices": ["z = P/P꜀", "z = (T/T)(P꜀/P)", "z = T/T꜀", "z = pV/RT"],
        "answer": "z = pV/RT"
    },
    {
        "question": "On what plane is Mollier diagram plotted?",
        "choices": ["p - V", "p - T", "s - u", "h - s"],
        "answer": "h - s"
    },
    {
        "question": "How is the quality, x, of a liquid-vapor mixture defined?",
        "choices": ["The fraction of the total mass that is saturated liquid", "The fraction of the total volume that is saturated liquid", "The fraction of the total mass that is saturated vapour", "The fraction of the total volume that is saturated vapour"],
        "answer": "The fraction of the total mass that is saturated vapour"
    },
    {
        "question": "What is the expression for the heat vaporization hg = enthalpy of the saturated vapor, hf = enthalpy of the saturated liquid",
        "choices": ["hg + hf", "h²g - h²f", "hf - hg", "hg - hf"],
        "answer": "hg - hf"
    },
    {
        "question": "The first law of thermodynamics is based on which of the following principles?",
        "choices": ["the enthalpy-entropy relationship", "action-reaction", "conservation of mass", "conservation of energy"],
        "answer": "conservation of energy"
    },
    {
        "question": "The general energy equation for an open system involves the following five terms. (I. accumulation of energy II. net energy transfer by work (standard sign convention) III. net energy transfer by heat (standard sign convention) IV. transfer of energy in by mass flow V. transfer of energy out by mass flow)",
        "choices": ["I = II + III + IV + V", "I = II - III - IV + V", "I = - II + III + IV - V", "I = II + III + IV - V"],
        "answer": "I = - II + III + IV - V"
    },
    {
        "question": "What is the value of the work done for a closed, reversible, isometric system?",
        "choices": ["positive", "zero", "negative", "positive or negative"],
        "answer": "zero"
    },
    {
        "question": "The expansion of a gas through a plug at a high pressure results in a temperature rise, while at lower pressures a temperature drop occurs. The Joule-Thompson coefficient, μJ T, is defined as the ratio of the change in temperature to the change in pressure. The temperature at which μJ T changes from positive to negative is called the inversion temperature. When μJ T is negative, which of the following statements is true?",
        "choices": ["No liquification is possible", "Gases may be liquefied by pressurization", "Only trace liquification is possible", "Liquification can be obtained only with a catalyst"],
        "answer": "Gases may be liquefied by pressurization"
    },
    {
        "question": "How does an adiabatic process compare to an isentropic process?",
        "choices": ["Adiabatic: heat transfer = 0; isentropic: heat transfer ≠ 0", "Adiabatic: heat transfer 0; isentropic: heat transfer = 0", "Both: heat transfer = 0; isentropic: reversible", "Adiabatic: reversible: isentropic: not reversible."],
        "answer": "Both: heat transfer = 0; isentropic: reversible"
    },
    {
        "question": "What is true about the polytropic exponent, n, for a perfect gas undergoing an isobaric process?",
        "choices": ["n ＞0", "n ＜0", "n = 0", "n → ∞"],
        "answer": "n = 0"
    },
    {
        "question": "During an adiabatic, internally reversible process, what is true about the change in entropy?",
        "choices": ["It is always greater than zero", "It is always zero", "It is always less than zero", "It is infinite"],
        "answer": "It is always zero"
    },
    {
        "question": "For an irreversible process, what is true about the total change in entropy of the system and surroundings?",
        "choices": ["dS＞0", "dS＜0", "dS = ∞", "dS = 0"],
        "answer": "dS＞0"
    },
    {
        "question": "For which type of process is the equation dQ = TdS valid?",
        "choices": ["Irreversible", "Isothermal", "Isobaric", "Reversible"],
        "answer": "Reversible"
    },
    {
        "question": "Which of the following is true for any process?",
        "choices": ["△S surroundings △S system ≤ 0", "△S surroundings △S system＞0", "△S surroundings △S system ＜0", "△S surroundings △S system ≥ 0"],
        "answer": "△S surroundings △S system ≥ 0"
    },
    {
        "question": "Which of the following thermodynamic cycles is the most efficient?",
        "choices": ["Carnot", "Combined Brayton-Rankine", "Rankine", "Brayton"],
        "answer": "Carnot"
    },
    {
        "question": "The ideal reversible Carnot cycle involves several basic processes. What type of processes are they?",
        "choices": ["two adiabatic and two isentropic", "all isentropic", "two isothermal and two isentropic", "all adiabatic"],
        "answer": "two isothermal and two isentropic"
    },
    {
        "question": "Which of the following is not an advantage of a superheated, closed Rankine cycle over an open Rankine cycle?",
        "choices": ["increased turbine life", "increased efficiency", "increased boiler life", "increased turbine work output"],
        "answer": "increased boiler life"
    },
    {
        "question": "Which of the following statements regarding Rankine cycles is false?",
        "choices": ["Superheating increases the efficiency of a Rankine cycle.", "In practical terms, the susceptibility of the engine materials to corrosion is not a key limitation on the operating efficiency.", "The temperatures at which energy is transferred to and from the working liquid are less separated than in a Carnot cycle.", "Use of a condensable vapor in the cycle increases the efficiency of the cycle."],
        "answer": "In practical terms, the susceptibility of the engine materials to corrosion is not a key limitation on the operating efficiency."
    },
    {
        "question": "Which of the following sets of reversible processes describes an ideal Otto cycle? I. adiabatic compression, constant volume heat addition, adiabatic expansion, constant volume heat rejection II. isothermal compression, isobaric heat addition, isothermal expansion, isobaric heat rejection.",
        "choices": ["I and II in succession", "II only", "I only", "II and I in succession"],
        "answer": "I only"
    },
    {
        "question": "Which of the following are not units of pressure?",
        "choices": ["kPa", "Bars", "Kg/m²", "N/cm³"],
        "answer": "Kg/m²"
    },
    {
        "question": "Which of the following is not a unit of work?",
        "choices": ["Erg", "N·m", "Kg·m²/s²", "Dyne"],
        "answer": "Dyne"
    },
    {
        "question": "Which of the following is the definition of a joule?",
        "choices": ["A unit of power", "A kg·m/s²", "A N·m", "A rate of change of energy"],
        "answer": "A N·m"
    }

],

  "Chemistry & Statics": [
    {
        "question": "The mole is a basic unit of measurement in chemistry. Which of the following is not equal to or the same as 1 mol of the substance indicated?",
        "choices": ["16 g of oxygen (O₂) molecules", "22.4 L of nitrogen (N₂) gas at STP", "12 g of carbon atoms", "6.02 x 10²³ cxygen (O₂) molecules"],
        "answer": "16 g of oxygen (O₂) molecules"
    },
    {
        "question": "Which one of the following is standard temperature and pressure (STP)?",
        "choices": ["32°F and zero pressure", "0K and one atmosphere pressure", "0°C and one atmosphere pressure", "0°F and zero pressure"],
        "answer": "0°C and one atmosphere pressure"
    },
    {
        "question": "Which of the following statements is false for an ideal gas?",
        "choices": [
            "Collisions between gas molecules are perfectly elastic and result in no decrease in kinetic energy.",
            "pV = nRT",
            "No attractive forces exist between the molecules.",
            "The molecules behave as solid spheres of finite radius."
        ],
        "answer": "The molecules behave as solid spheres of finite radius."
    },
    {
        "question": "The following statements are made with regard to the boiling point of a liquid. Which statement is false?",
        "choices": [
            "At high elevations, water boils at a lower temperature because of a reduction in the surface tension of the water.",
            "The boiling point is the temperature at which the vapor pressure of a liquid equals the applied pressure on the liquid.",
            "separated by slowly raising the temperature to draw off each fraction (i.e., by fractional distillation)",
            "A nonvolatile substance having zero vapor pressure in solution. (e.g., sugars or salts) has no true boiling point."
        ],
        "answer": "At high elevations, water boils at a lower temperature because of a reduction in the surface tension of the water."
    },
    {
        "question": "The critical point for a mixture occurs for which of the following cases?",
        "choices": [
            "The liquid has no absorbed gas.",
            "The vapor phase is stable.",
            "The liquid is completely vaporized.",
            "The vapor and liquid exist in a single form."
        ],
        "answer": "The vapor and liquid exist in a single form."
    },
    {
        "question": "How is 'motality' defined?",
        "choices": [
            "The number of gram - formula weights of solute per liter",
            "The number of moles of solute in 1000 g of solvent",
            "The number of gram - equivalent weights of solute in 1 L of solution",
            "The number of moles of solute in 1 L of solution"
        ],
        "answer": "The number of moles of solute in 1000 g of solvent"
    },
    {
        "question": "Which of the following postulates does Bohr's model of the hydrogen atom involve?",
        "choices": [
            "The electron is an atom has an infinite range of motion allowed to it.",
            "In any of its energy states, the electron moves in a circular orbit about the nucleus.",
            "The states of allowed electron motion are those in which the angular momentum of the electron is an integral multiple of H/π.",
            "When an atom changes from a low energy state to a high energy state, it emits a quantum of radiation whose energy is equal to the difference in energy between the two states."
        ],
        "answer": "In any of its energy states, the electron moves in a circular orbit about the nucleus."
    },
    {
        "question": "Which of the following elements and compounds is reactive in its pure form?",
        "choices": ["sodium (Na)", "hydrochloric acid (HCI)", "carbon dioxide (CO₂)", "helium (He)"],
        "answer": "sodium (Na)"
    },
    {
        "question": "Two major types of chemical bonds are observed in chemical bonding: ionic and covalent. Which of the following has a bond that is the least ionic in character?",
        "choices": ["H₂", "H₂O", "NaCI", "CH₄"],
        "answer": "H₂"
    },
    {
        "question": "Which of the following statement is false?",
        "choices": [
            "It is not possible for bonds between a pair of atoms to be different (e.g., different bond lengths or bond energies) in different compounds.",
            "The bond length for a pair of atoms is the point of lowest energy.",
            "The repulsion between two nuclei increases as their charge increases.",
            "The electrostatic repulsion between two nuclei increases as the atoms are brought together."
        ],
        "answer": "It is not possible for bonds between a pair of atoms to be different (e.g., different bond lengths or bond energies) in different compounds."
    },
    {
        "question": "Which of the following statement is false?",
        "choices": [
            "The average bond energy is the approximate energy required to break a bond in any compound in which it occurs.",
            "The change in enthalpy is negative when energy is absorbed in the formation of a compound from its elements.",
            "The energy released when a gaseous molecule is formed from its gaseous atoms can be estimated using average bond energies.",
            "For a diatomic molecule, the bond dissociation energy is the change in the enthalpy of the reaction when the diatomic molecule is separated into atoms."
        ],
        "answer": "The change in enthalpy is negative when energy is absorbed in the formation of a compound from its elements."
    },
    {
        "question": "A substance is oxidized when which of the following occurs?",
        "choices": [
            "It becomes more negative.",
            "It gives off heat.",
            "It turns red.",
            "It loses electrons."
        ],
        "answer": "It loses electrons."
    },
    {
        "question": "In order to assign oxidation states in polyatomic molecules, which of the following rules is followed?",
        "choices": [
            "The oxidation of all elements in any allotropic form is zero.",
            "The oxidation state of hydrogen is always +1.",
            "The oxidation state of oxygen is always -2.",
            "All other oxidation states are chosen such that the algebraic sum of the oxidation states for the ion or molecule is zero."
        ],
        "answer": "The oxidation of all elements in any allotropic form is zero."
    },
    {
        "question": "What is the oxidation state of nitrogen in NO₃?",
        "choices": ["+3", "+5", "+1", "-1"],
        "answer": "+5"
    },
    {
        "question": "What is the oxidation number of Cr in the dichromate ion (Cr₂O₇)⁻²?",
        "choices": ["6", "-1", "3", "0"],
        "answer": "6"
    },
    {
        "question": "Reactions generally proceed faster at higher temperatures because of which of the following?",
        "choices": [
            "The activation energy is less.",
            "The molecules are less energetic.",
            "Both options A and B",
            "The molecules collide more frequently."
        ],
        "answer": "Both options A and B"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": [
            "The differential rate law is the mathematical expression that shows how the rate of a reaction depends on volume.",
            "The net rate at which a reaction proceeds from left to right is equal to the forward rate minus the reverse rate.",
            "In general, as reaction products are formed, they react with each other and re-form reactants.",
            "At equilibrium, the net reaction rate is zero."
        ],
        "answer": "The differential rate law is the mathematical expression that shows how the rate of a reaction depends on volume."
    },
    {
        "question": "Which of the following statements is false?",
        "choices": [
            "It is possible to influence the products of a chemical change by controlling the factors which affect reaction rates.",
            "Heterogeneous reactions are the reactions that take place at the boundary surface between two faces.",
            "In general, when any two compounds are unmixed, a large number of reactions may be possible, but those which proceed the fastest are the ones observed.",
            "When the temperature is raised, the rate of any reaction is always increased."
        ],
        "answer": "When the temperature is raised, the rate of any reaction is always increased."
    },
    {
        "question": "Which of the following statements is false?",
        "choices": [
            "In considering chemical equilibrium, the relative stabilities of products and reactants are important.",
            "In treating reaction rates, the rate at which reactants are converted to products is important.",
            "In considering chemical equilibrium, the pathway from the initial state to the final state is important.",
            "In treating reaction rates, the sequence of physical processes by which reactants are converted to products is important."
        ],
        "answer": "In considering chemical equilibrium, the pathway from the initial state to the final state is important."
    },
    {
        "question": "The voltage of a galvanic cell does not depend on which of the following parameters?",
        "choices": [
            "Pressure of solutions",
            "Volume of solutions",
            "Temperature of solutions",
            "Concentration of solutions"
        ],
        "answer": "Volume of solutions"
    },
    {
        "question": "Which of the following statements regarding a galvanic cell is false?",
        "choices": [
            "When a current I flows through the voltage difference Δε for a time, t, the electrical work performed is (Δε) It.",
            "The cell voltage, Δε, is totally independent of the number of electrons transferred in a given reaction.",
            "A negative value of cell voltage Δε means that the reaction in the cell proceeds spontaneously from right to left.",
            "If the standard potential of a cell is zero, a concentration difference alone is sufficient to generate a voltage."
        ],
        "answer": "The cell voltage, Δε, is totally independent of the number of electrons transferred in a given reaction."
    },
    {
        "question": "Which one of the following statements regarding organic substances is false?",
        "choices": [
            "Organic substances generally dissolve in high-concentration acids.",
            "All organic matter contains carbon.",
            "Organic substances generally do not dissolve in water.",
            "Organic matter is generally stable at very high temperatures."
        ],
        "answer": "Organic matter is generally stable at very high temperatures."
    },
    {
        "question": "Which one of the following is most likely to prove that a substance is inorganic?",
        "choices": [
            "The substance evaporates in room temperature and pressure.",
            "Analysis shows that the substance contains hydrogen.",
            "The substance floats in water.",
            "The substance is heated together with copper oxide and the resulting gases are found to have no effect on limestone."
        ],
        "answer": "The substance is heated together with copper oxide and the resulting gases are found to have no effect on limestone."
    },
    {
        "question": "According to the Bohr model of the hydrogen atom, which of the following statements are true?",
        "choices": [
            "I, II, and III",
            "I and II",
            "II, III, and IV",
            "II and IV"
        ],
        "answer": "II and IV"
    },
    {
        "question": "STATICS (Lindeburg): Which statement about area moments of inertia is false?",
        "choices": [
            "I = ∫ d²dA",
            "The areas closest to the axis of interest contribute most to the moment of inertia.",
            "The moment of inertia of a large area is equal to the summation of the inertia of the smaller areas within the large area.",
            "The parallel axis theorem is used to calculate moments of inertia about the parallel displaced axis."
        ],
        "answer": "The areas closest to the axis of interest contribute most to the moment of inertia."
    }

],

  "Material Science": [
    {
        "question": "Which of the following affects most of the electrical and thermal properties of materials?",
        "choices": ["The electrons, particularly the outermost ones", "The magnitude of electrical charge of the protons", "The weight of the atoms", "The atomic weight expressed in grams per gram atom"],
        "answer": "The electrons, particularly the outermost ones"
    },
    {
        "question": "What are valence electrons?",
        "choices": ["Electrons with positive charge", "The electrons of complete quantum shells", "The K quantum shell electrons", "The outer shell electrons"],
        "answer": "The outer shell electrons"
    },
    {
        "question": "What is the strong bond between hydrogen atoms called?",
        "choices": ["Ionic and metallic bonds", "The ionic bond", "The metallic bond", "The covalent bond"],
        "answer": "The covalent bond"
    },
    {
        "question": "What are van der Waals forces?",
        "choices": ["Forces between electrons and protons", "Weak secondary bonds between atoms", "Primary bonds between atoms", "Forces not present in liquids"],
        "answer": "Weak secondary bonds between atoms"
    },
    {
        "question": "Compare the metallic iron Fe and the ferrous and ferric ions Fe²⁺ and Fe³⁺ at the same temperature. Which has the smallest atomic radius?",
        "choices": ["Fe", "Fe³⁺", "Fe²⁺", "They have the same radii."],
        "answer": "Fe³⁺"
    },
    {
        "question": "Cesium (Cs) and sodium (Na) both have the same valence (+1), yet with chlorine (Cl), cesium has a coordination number of 8 in CsCl, while sodium has a coordination number of only 6 in NaCl. What is main reason for this difference?",
        "choices": ["The atomic weight of Cs is larger than the weight of Na.", "Cs is too large to be coordinated by only 6 chloride ions.", "Cs forms covalent bonds in CsCl.", "Cs contains more electrons than Na."],
        "answer": "Cs is too large to be coordinated by only 6 chloride ions."
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Ceramics are inorganic, non-metallic solids that are processed or used at high temperatures.", "Oxides, carbides, and nitrides are considered to be within the class of materials known as glasses", "Most metals are strong, ductile and malleable. In general, they are heavier than most other substances.", "Metals are chemical elements that form substances that are opaque, lustrous, and good conductors of heat and electricity."],
        "answer": "Oxides, carbides, and nitrides are considered to be within the class of materials known as glasses"
    },
    {
        "question": "Which of the following materials is not a viscoelastic material?",
        "choices": ["Metal", "Glass", "Plastic", "Rubber"],
        "answer": "Metal"
    },
    {
        "question": "In molecules of the same composition, what are variations of atomic arrangements known as?",
        "choices": ["Monomers", "Polymers", "Isomers", "Non-crystalline structures"],
        "answer": "Isomers"
    },
    {
        "question": "Which of the following accurately describes differences between crystalline polymers and simple crystals?",
        "choices": ["III only", "II only", "I only", "I and III"],
        "answer": "I and III"
    },
    {
        "question": "Polymers that favor crystallization are least likely to have which of the following?",
        "choices": ["Small side groups", "An atactic configuration of side groups", "Small chain lengths", "Only one repeating unit"],
        "answer": "An atactic configuration of side groups"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Both magnesium and zinc have a hexagonal close-packed crystal structure.", "Both lead and cadmium have a hexagonal close-packed crystal structure.", "Iron can have either a face-centered or a body-centered cubic crystal structure.", "Both copper and aluminum have a face-centered crystal structure."],
        "answer": "Both lead and cadmium have a hexagonal close-packed crystal structure."
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["The coordinates of the unique lattice points for a face-centered cubic unit cell are: ( 0 0 0 ); ( ½ ½ 0 ) ; (½ 0 ½) and ( 0 ½ ½ ).", "The coordinates of the unique lattice points for a body-centered cubic unit cell are: ( 0 0 0 ) and ( ½ ½ ½ )", "The coordinates of the unique lattice points for a simple cubic unit cell are: ( 0 0 0 ).", "The coordinates of the unique lattice points for a rhombohedral unit cell are: ( ½ ½ ½ )."],
        "answer": "The coordinates of the unique lattice points for a rhombohedral unit cell are: ( ½ ½ ½ )."
    },
    {
        "question": "Which crystal structure possesses the highest number of close-packed planes and close packed directions?",
        "choices": ["Body-centered cubic", "Face-centered cubic", "Simple cubic", "Close-packed hexagonal"],
        "answer": "Face-centered cubic"
    },
    {
        "question": "What are the most common slip planes for face-centered cubic and body-centered cubic structures, respectively?",
        "choices": ["Faced-centered: ( 1 1 0 ) ; body-centered: ( 1 1 1 )", "Faced-centered: ( 1 0 0 ) ; body-centered: ( 1 1 0 )", "Faced-centered: ( 1 1 1 ) ; body-centered: ( 1 0 0 )", "Faced-centered: ( 1 1 1 ) ; body-centered: ( 1 1 0 )"],
        "answer": "Faced-centered: ( 1 1 1 ) ; body-centered: ( 1 0 0 )"
    },
    {
        "question": "Comparing the face-centered cubic lattice with the hexagonal close-packed structure only?",
        "choices": ["Its deformation properties are more directional.", "Its stacking order is ABCABC.", "It has the closest packed lattice structure.", "Its coordination number is 12."],
        "answer": "Its deformation properties are more directional."
    },
    {
        "question": "Which of the following statements is false regarding X-ray diffraction?",
        "choices": ["Bragg's law states that ηλ/2d = sinθ n is an integer, λ is the wavelength of the X-ray, d is the interplanar spacing, and is the scattering angle.)", "X-ray diffraction can be used to determine the grain size of a (C) specimen.", "X-ray diffraction is only useful for studying simpler crystals such as the body centered cubic structure, rather than more complex crystals like the hexagonal close packed structure.", "The geometrical structure factor F(hkl) is the ratio of the amplitude of the X-ray reflected from a plane in a crystal to the amplitude of the X-ray scattered from a single electron."],
        "answer": "X-ray diffraction is only useful for studying simpler crystals such as the body centered cubic structure, rather than more complex crystals like the hexagonal close packed structure."
    },
    {
        "question": "What are Schottky and Frenkel defects?",
        "choices": ["Both are types of edge dislocations", "Both are types of surface defects", "They are types of line defects", "They are types of point defects"],
        "answer": "They are types of point defects"
    },
    {
        "question": "What is the difference between low-angle grain boundaries and high-angle grain boundaries?",
        "choices": ["There is no real difference; the terms are interchangeable.", "Low-angle boundaries are more disordered than high-angle boundaries.", "High-angle boundaries have higher misorientation between adjacent grains than low-angle boundaries.", "Low-angle boundaries involve a rotation of more than 15 degrees between neighboring grains."],
        "answer": "High-angle boundaries have higher misorientation between adjacent grains than low-angle boundaries."
    },
    {
        "question": "Which of the following statements about dislocations is false?",
        "choices": ["An edge dislocation corresponds to an extra half-plane of atoms inserted in a crystal.", "A screw dislocation corresponds to a spiral planar ramp resulting from shear deformation.", "Dislocations make it harder for materials to deform plastically.", "Dislocations are line defects in a crystal structure."],
        "answer": "Dislocations make it harder for materials to deform plastically."
    },
    {
        "question": "Which of the following techniques is most useful for viewing the microstructure of a metal sample at high magnification (e.g., to see dislocations)?",
        "choices": ["Optical microscopy", "Scanning electron microscopy (SEM)", "Transmission electron microscopy (TEM)", "X-ray diffraction"],
        "answer": "Transmission electron microscopy (TEM)"
    },
    {
        "question": "In the context of materials science, what is diffusion?",
        "choices": ["The scattering of X-rays through a material", "The vibration of atoms at their lattice sites", "The movement of atoms or molecules within a material", "The melting of a solid into a liquid"],
        "answer": "The movement of atoms or molecules within a material"
    },
    {
        "question": "Which of the following conditions does *not* increase the rate of diffusion in a solid?",
        "choices": ["Increasing temperature", "Increasing the concentration gradient", "Increasing atomic bonding strength", "Increasing the number of vacancies"],
        "answer": "Increasing atomic bonding strength"
    },
    {
        "question": "Which of the following is *not* a typical characteristic of polymers?",
        "choices": ["High strength at high temperatures", "Light weight", "Flexibility", "Low thermal conductivity"],
        "answer": "High strength at high temperatures"
    },
    {
        "question": "Which type of bonding is predominant in ceramics?",
        "choices": ["Covalent and ionic", "Metallic", "Van der Waals", "Hydrogen"],
        "answer": "Covalent and ionic"
    },
    {
        "question": "In stress-strain curves for ductile materials, what does the yield point represent?",
        "choices": ["The point where fracture occurs", "The maximum stress the material can withstand", "The end of elastic deformation and the beginning of plastic deformation", "The minimum stress before unloading"],
        "answer": "The end of elastic deformation and the beginning of plastic deformation"
    },
    {
        "question": "Which property is best measured using a Charpy or Izod test?",
        "choices": ["Tensile strength", "Fracture toughness", "Impact resistance", "Elastic modulus"],
        "answer": "Impact resistance"
    },
    {
        "question": "Which of the following statements is true about the elastic modulus of a material?",
        "choices": ["It is the stress at which plastic deformation begins.", "It is the ratio of strain to stress.", "It is the slope of the stress-strain curve in the elastic region.", "It is a measure of the material's toughness."],
        "answer": "It is the slope of the stress-strain curve in the elastic region."
    },
    {
        "question": "Which of the following strengthening mechanisms in metals is associated with reducing the grain size?",
        "choices": ["Work hardening", "Grain boundary strengthening", "Solid solution strengthening", "Precipitation hardening"],
        "answer": "Grain boundary strengthening"
    },
    {
        "question": "Which of the following is the best definition of creep in materials?",
        "choices": ["Sudden fracture after yielding", "Time-dependent permanent deformation under constant stress", "Elastic deformation under dynamic load", "Brittle failure at low temperatures"],
        "answer": "Time-dependent permanent deformation under constant stress"
    },
    {
        "question": "Which word combination best completes the following sentence? 'Plastic deformation of a single crystal occurs either by _____ or by _____, but _____ is the more common method.'",
        "choices": ["shearing; compression; compression", "slip; twinning; slip", "bending; compression; bending", "twinning; slip; twinning"],
        "answer": "slip; twinning; slip"
    },
    {
        "question": "Which one of these statements is true for twinning?",
        "choices": ["It occurs at lower shear stresses than slip", "It cannot be caused by impact or thermal treatment", "It frequently occurs in hexagonal close-packed structures", "It is the most significant form of plastic deformation"],
        "answer": "It frequently occurs in hexagonal close-packed structures"
    },
    {
        "question": "Which of the following does not produce vacancies, interstitial defects, or impurity defects in a material?",
        "choices": ["plastic deformation", "slow equilibrium cooling", "increasing the temperature (which increases atomic energy)", "quenching"],
        "answer": "slow equilibrium cooling"
    },
    {
        "question": "Which of the following are true statements about the modulus of elasticity, E?",
        "choices": ["It is the same as the rupture madulus", "It is the slope of the stress-strain diagram in the linearly elastic region", "It is the ratio of stress to volumetric strain", "its values depends only on the temperature of the material"],
        "answer": "It is the slope of the stress-strain diagram in the linearly elastic region"
    },
    {
        "question": "In general, what are the effects of cold working a metal?",
        "choices": ["decreased strength, increased ductility", "decreased strength and ductility", "increased strength and ductility", "increased strength, decreased ductility"],
        "answer": "increased strength, decreased ductility"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Annealing reduces the hardness of the metal", "The process of applying force to a metal at temperatures below the temperature of crystallization in order to plastically deform the metal is called cold working", "The amount or percentage of cold work cannot be obtained from information about change in the area or thickness of a metal", "Annealing eliminates most of the defects caused by the cold working of a metal"],
        "answer": "The amount or percentage of cold work cannot be obtained from information about change in the area or thickness of a metal"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Cold work decreases the yield point of metal", "Cold working causes a slight decrease in the density and electrical conductivity of a metal", "There is a considerable increase in the hardness and the strength of a cold worked metal", "Cold working a metal significantly reduces its ductility"],
        "answer": "Cold work decreases the yield point of metal"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Hot working causes much strain hardening of the metal.", "Hot working can be regarded as the simultaneous combination of cold working and annealing.", "One of the primary goals of hot working is to produce a fine-grained product.", "Hot working increases the density of the metal."],
        "answer": "Hot working causes much strain hardening of the metal."
    },
    {
        "question": "Which of the following statement is false?",
        "choices": ["Fine-grained materials usually exhibit greater yield stresses than coarse- grained materials at low temperatures.", "Grain size is of minor importance in considering the properties of polycrystalline materials", "At high temperatures, grain boundaries become weak, and sliding occurs.", "Grain boundary sliding is the relative movement of two grains by a shear movement of parallel to the grain boundary between them."],
        "answer": "Grain size is of minor importance in considering the properties of polycrystalline materials"
    },
    {
        "question": "Which of the following correctly describes atoms located at grain boundaries?",
        "choices": ["They have a higher free energy than atoms in the undisturbed part of the crystal lattice", "All of the above are correct.", "They are located primarily in highly strained and distorted positions", "They are subjected to the same type of interatomic forces that are present in the interior atoms of the crystal."],
        "answer": "All of the above are correct."
    },
    {
        "question": "What causes the vinyl interiors of automobiles to crack when subjected to prolonged direct sunlight?",
        "choices": ["repetitive expansion and contraction of the plastic", "the volatilization (evaporation) of plasticizers", "all of the above", "oxidation of the plastic by sunlight and oxygen"],
        "answer": "all of the above"
    },
    {
        "question": "Low density polyethylene undergoes extensive (over 100%) elongation prior to rupture, while polystyrene undergoes only 1-26 elongation. What is the main reason for this difference?",
        "choices": ["Polyethylene is less crystalline", "The large styrene groups in the polystyrene prevent slippage", "More cross-linking occurs in the polystyrene", "The polyethylene is less done"],
        "answer": "The large styrene groups in the polystyrene prevent slippage"
    },
    {
        "question": "Which of the following describe(s) the modulus of elasticity of an elastomer?",
        "choices": ["I only", "III only", "I and II", "II only"],
        "answer": "I and II"
    },
    {
        "question": "Which statement(s) describe(s) the glass transition temperature?",
        "choices": ["I only", "I and Ill", "II and III", "I and II"],
        "answer": "I and Ill"
    },
    {
        "question": "Of the following inorganic glasses, which have tetrahedral lattice structures? SiO₂, B₂O₃, BeF₂, GeO₂",
        "choices": ["SiO₂ and B₂O₃", "SiO₂ and BeF₂", "SiO₂, BeF₂ and GeO₂", "SiO₂, B₂O₃ and BeF₂"],
        "answer": "SiO₂, BeF₂ and GeO₂"
    },
    {
        "question": "Which of the following is not an important criterion for forming a complete binary solid solution?",
        "choices": ["The difference in atomic numbers should be small", "The difference in radii should be less than 15%", "The constituent elements must have the same crystal structure", "The atoms should be close to one another in the periodic table"],
        "answer": "The difference in atomic numbers should be small"
    },
    {
        "question": "How can an ordered solid solution be distinguished from a compound?",
        "choices": ["The atoms in an ordered solid solution form layers in the lattice structure", "The solute atoms in an ordered solid solution substitute for atoms in the parent lattice", "In an ordered solid solution, the solute atoms occupy interstitial positions within the lattice.", "When heated, an ordered solid solution becomes disordered before melting."],
        "answer": "When heated, an ordered solid solution becomes disordered before melting."
    },
    {
        "question": "What is transformed in a eutectoid reaction?",
        "choices": ["A solid becomes a liquid at the liquidus temperature.", "A solid becomes a liquid at the eutectic temperature.", "A liquid becomes a solid at the solidus temperature.", "One liquid is transformed into two solids of different composition."],
        "answer": "One liquid is transformed into two solids of different composition."
    },
    {
        "question": "Which of the following is the correct representation of a eutectic cooling reaction?",
        "choices": ["(solid₁)→(solid₂) + (solid₃)", "(solid₁) + (solid₂) → (solid₃)", "(solid₁) +(liquid)→(solid₂)", "(liquid)→(solid₁)→(solid₂)"],
        "answer": "(liquid)→(solid₁)→(solid₂)"
    },
    {
        "question": "Two pieces of copper are bazed together using a eutectic alloy of copper and silver. The braze material melts at 780° C. If a second braze is attempted in order to attach another piece of copper, which of the following is true?",
        "choices": ["The first braze will not melt at 780°C, but the second braze will.", "The braze temperature must be lowered below 780°C.", "The first braze will partially melt, causing the parts to slide.", "The first braze will melt if the braze temperature is again 780°C."],
        "answer": "The first braze will not melt at 780°C, but the second braze will."
    },
    {
        "question": "On an alloy phase diagram, what is the solidus temperature?",
        "choices": ["The temperature of the liquid phase at which the first solid forms for a given overall composition.", "The temperature of the solid phase at which the first liquid forms for a given overall composition.", "The point at which all solids completely reach the liquid stage.", "The temperature at which the solid is at equilibrium."],
        "answer": "The temperature of the solid phase at which the first liquid forms for a given overall composition."
    },
    {
        "question": "Which of the following phases of steel has a face centered cubic structure?",
        "choices": ["cementite", "ferrite", "austenite", "pearlite"],
        "answer": "austenite"
    },
    {
        "question": "Low-carbon steels are generally used in the 'as rolled' or 'as fabricated' state. What is the reason for this?",
        "choices": ["They degrade severely under heat treatment", "They come in many different shapes and thickness", "Their chromium content is so low", "Their strength generally cannot be increased by heat treatment"],
        "answer": "Their strength generally cannot be increased by heat treatment"
    },
    {
        "question": "The equilibrium cooling of a steel containing 0.8% carbon results in a product with little use because it is extremely brittle. Which of the following is the primary reason for this poor characteristic?",
        "choices": ["The carbide forms thin plates that are brittle.", "The austenite grains are too small, and the carbide grains are too large.", "Thick layers of iron carbide surround the coarse ferrite grains.", "The material has not been cold worked."],
        "answer": "The austenite grains are too small, and the carbide grains are too large."
    },
    {
        "question": "Ductile cast iron and gray cast iron both contain 4% carbon. Ductile cast iron, however, has as higher tensile strength and is considerably more ductile. Which of the following is the major difference that accounts for the superior properties of the ductile iron?",
        "choices": ["The ferrite grains in the gray cast iron are excessively large.", "The gray cast iron contains iron carbide, whereas the ductile iron contains graphite.", "The gray cast iron contains flakes of graphite, whereas the ductile iron contains spheroids of graphite.", "The ductile iron is tempered to give better properties"],
        "answer": "The gray cast iron contains flakes of graphite, whereas the ductile iron contains spheroids of graphite."
    },
    {
        "question": "In preparing a metallographic iron specimen, the grain boundaries are made most visible by which of the following steps?",
        "choices": ["polishing the sample Al₂O₃", "mounting the sample in an epoxy resin mold", "etching the sample in a 2% solution of nitric acid in alcohol", "grinding the sample with silicon carbide abrasive"],
        "answer": "etching the sample in a 2% solution of nitric acid in alcohol"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["The addition of small amounts of molybdenum to low alloy steels makes it possible to harden and strengthen thick pieces of the metal by heat treatment", "Low-alloy steels contain small amounts of nickel and chromium", "Low-alloy steels are a minor group and are rarely used", "Low-alloy steels are used in the heat treated condition"],
        "answer": "Low-alloy steels are a minor group and are rarely used"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["small amounts of silicon in steels have little influence on toughness or fabricability", "small amounts of copper increase the tensile strength of steels", "addition of small amounts of silicon to steel can cause a marked decrease in yield strength of the steel", "High-strength, low-alloy steels are not as strong as nonalloy, low-carbon steels"],
        "answer": "addition of small amounts of silicon to steel can cause a marked decrease in yield strength of the steel"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["The nonmagnetic stainless steels contain large amounts of nickel", "There are three basic types of stainless steels; martensitic, austenitic, and ferritic", "Stabilization of the face centered cubic crystal structure of stainless steels imparts a nonmagnetic characteristic to the alloy", "Stainless steels contain large amounts of chromium"],
        "answer": "There are three basic types of stainless steels; martensitic, austenitic, and ferritic"
    },
    {
        "question": "For a completely corrosion resistant stainless steel, what minimum percentage of chromium in the alloy is required?",
        "choices": ["11%", "1.1%", "3.2%", "8.3%"],
        "answer": "11%"
    },
    {
        "question": "Which of the following would most likely require a steel containing 0.6% carbon that has been spheroidized, cold drawn, and slightly tempered?",
        "choices": ["a ball bearing", "a bridge beam", "a water pipe", "a cutting tools"],
        "answer": "a ball bearing"
    }

],

  "Mechanics of Material & Dynamics": [
    {
        "question": "Where do stress concentration occur? (I. Near the points of application of concentrated loads II. Along the entire length of high distributed loads III. At discontinuities)",
        "choices": ["I, II and III", "I and II", "I and III", "II and III"],
        "answer": "I and III"
    },
    {
        "question": "What is the definition of normal strain, ε? (δ is elongation, L is the length of the specimen)",
        "choices": ["ε = δ/L", "ε = L+δ/L", "ε = δ/L+δ", "ε = L+δ/δ"],
        "answer": "ε = δ/L"
    },
    {
        "question": "In a stress-strain diagram, what is the correct term for the stress level at ε = 0.2% offset?",
        "choices": ["The elastic limit", "The offset rupture stress", "The offset yield stress", "The plastic limit"],
        "answer": "The offset yield stress"
    },
    {
        "question": "Under which type of loading does fatigue occur?",
        "choices": ["Plane load", "Static load", "Repeated load", "High load"],
        "answer": "Repeated load"
    },
    {
        "question": "A specimen is subjected to a load. When the load is removed, the strain disappears. From this information, which of the following can be deduced about this material?",
        "choices": ["It is plastic", "It does not obey Hooke's law", "It has high modulus of elasticity", "It is elastic"],
        "answer": "It is elastic"
    },
    {
        "question": "Which of the following may be the Poisson's ratio of material?",
        "choices": ["0.35", "0.52", "0.55", "0.60"],
        "answer": "0.35"
    },
    {
        "question": "For a rectangular beam under transverse (bending) loading, where is the location of maximum shear stress?",
        "choices": ["at the top edge", "at the bottom edge", "at the neutral axis", "at a location between the top edge and the neutral axis"],
        "answer": "at the neutral axis"
    },
    {
        "question": "How many degrees of freedom does a coin rolling on the ground have?",
        "choices": ["one", "two", "five", "three"],
        "answer": "five"
    },
    {
        "question": "What is the definition of instantaneous velocity?",
        "choices": ["v = dx/dt", "v = ∫xdt", "v = lim Δt/Δx //(Δt→0)", "v = dxdt"],
        "answer": "v = dx/dt"
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["The frictional force always acts to resist motion.", "The time rate of change of the angular momentum about a fixed point is equal to the total moment of the external forces acting on the system about the point.", "The coefficient of restitution can be less than zero.", "Momentum is conserved during elastic collisions."],
        "answer": "The coefficient of restitution can be less than zero."
    },
    {
        "question": "Which of the following statements is false?",
        "choices": ["Angular momentum for rigid bodies may be regarded as the product of angular velocity and inertia.", "The radius of gyration for a mass of uniform thickness is identical to the radius of gyration for a planar area of the same shape.", "The acceleration of any point within a homogenous body rotating with a constant angular velocity is proportional to the distance of that point to the center of mass.", "Kinematics is the study of the effects of motion, while kinetics is the study of the causes of motion."],
        "answer": "The acceleration of any point within a homogenous body rotating with a constant angular velocity is proportional to the distance of that point to the center of mass."
    }

],

  "EE-DC Electricity": [
    {
        "question": "Which statement about a charge placed on a dielectric material is true?",
        "choices": [
            "The charge increases the conductivity of the material.",
            "The charge diffuses across the material's surface.",
            "The charge is confined to the region in which the charge was placed.",
            "The charge diffuses through the interior of the material."
        ],
        "answer": "The charge is confined to the region in which the charge was placed."
    },
    {
        "question": "The coulomb force, F, acts on two charges a distance, r, apart. What is F proportional to?",
        "choices": [
            "1/r³",
            "r²",
            "r",
            "1/r²"
        ],
        "answer": "1/r²"
    },
    {
        "question": "Which of the following is not a property of magnetic field lines?",
        "choices": [
            "The lines cross themselves only at right angles.",
            "Magnetic field lines have no beginnings and no ends.",
            "The lines intersect surfaces of equal intensity of right angles.",
            "The field is stronger where the lines are closer together."
        ],
        "answer": "The lines cross themselves only at right angles."
    },
    {
        "question": "The tesla is a unit of _____.",
        "choices": [
            "magnetic flux density",
            "capacitance",
            "permittivity",
            "inductance"
        ],
        "answer": "magnetic flux density"
    },
    {
        "question": "Which statement is true?",
        "choices": [
            "Magnetic flux lines have sinks only.",
            "Magnetic flux lines have sources only.",
            "Magnetic flux lines have both sources and sinks.",
            "Magnetic flux lines do not have sources or sinks."
        ],
        "answer": "Magnetic flux lines do not have sources or sinks."
    },
    {
        "question": "Which of the following statements regarding the motion of a conductor through a changing magnetic field is false?",
        "choices": [
            "When a conducter is \"open circuited,\" no current flows despite its motion through the field.",
            "The lines of magnetic flux pass from the north pole to the south pole of the magnet.",
            "The conductor must move at constant velocity in order to generate a current.",
            "A current flowing counter to the direction of the conductor's motion will create a torque."
        ],
        "answer": "The conductor must move at constant velocity in order to generate a current."
    },
    {
        "question": "Modern locomotive are powered by DC motors driven by DC generators. These are, in turn, driven by diesel engines. Which of the following is the reason for using such a configuration instead of AC generator-motor sets?",
        "choices": [
            "Historically, the DC engine configuration has been used. There is no reason to change this.",
            "By using the DC equipment, the power factor problems associated with AC equipment are avoided.",
            "The DC equipment is significantly less expensive.",
            "The DC configuration provided high torque and good incremental power at low speeds and performs equally well at high speeds."
        ],
        "answer": "The DC configuration provided high torque and good incremental power at low speeds and performs equally well at high speeds."
    },
    {
        "question": "In a DC motor, what is the definition of \"field resistance\"?",
        "choices": [
            "It is the load resistance seen by a generator without considering inductance.",
            "It is the resistance of the excitation circuit.",
            "It is the static resistance of the motor.",
            "It is the resistance of the armature windings plus the load resistance."
        ],
        "answer": "It is the resistance of the excitation circuit."
    },
    {
        "question": "In a DC motor, which of the following does not cause sparking at a commutator?",
        "choices": [
            "graphite brushes with good contact pressure",
            "no load on the output leads",
            "frozen armature",
            "high brush contact resistance"
        ],
        "answer": "high brush contact resistance"
    },
    {
        "question": "The armature in a DC generator has one or more pairs of conductors or oils in which current is produce. In general, which of the following is true about the amount of power produced?",
        "choices": [
            "More coils give more power",
            "Power is related only to the number of poles",
            "No gain in power is achieved beyond four pairs of coils",
            "Power is a function only of the output voltage and current"
        ],
        "answer": "More coils give more power"
    },
    {
        "question": "Which of the following limits the number of coils that may be placed on the armature of a DC motor or generator?",
        "choices": [
            "the type of winding used",
            "coil to coil arcing due to the breakdown of insulation",
            "the number of poles",
            "the size of the load on the motor"
        ],
        "answer": "coil to coil arcing due to the breakdown of insulation"
    },
    {
        "question": "A DC system can be protected from lighting by including a thyrite tube in the circuit that connects the high-voltage line with the ground. Which of the following is false regarding a thyrite tube?",
        "choices": [
            "It has a very fast recovery time with regard to voltage change.",
            "Its usable link melts at high voltages.",
            "Its resistance becomes low at very high voltages.",
            "It maintains a very high resistance at or below the system operating voltage."
        ],
        "answer": "Its usable link melts at high voltages."
    },
    {
        "question": "The magnetic saturation curve limits the voltage at which a generator or motor can operate. Which of the following statements regarding saturation curves is false?",
        "choices": [
            "Poles that allow the production of more flux permit higher operating voltages.",
            "More flux at a constant field voltage can be produced by increasing the number of poles.",
            "Saturation does not depend upon the type of steel used in the poles.",
            "As field current increases, the hysteresis effect limits the increase in the flux produced."
        ],
        "answer": "Saturation does not depend upon the type of steel used in the poles."
    },
    {
        "question": "Series and shunt motors are connected like series and shunt generators, respectively. The term refer to the manner in which the self excitation of the poles is connected to the unit. Which of the following statements is false?",
        "choices": [
            "The torque curve of a shunt motor is linear.",
            "Field coils of the series motor or genitor arena series with the armature windings.",
            "Field coils of the shunt motor or generator are in parallel with the armature windings.",
            "The torque curves of both aunt and series motors are not affected by the value of the armature current."
        ],
        "answer": "The torque curves of both aunt and series motors are not affected by the value of the armature current."
    },
    {
        "question": "In terms of efficiency, shunt and series motors or generators have similar characteristics. Which of the following statements is false?",
        "choices": [
            "Efficiency decreases with lower speeds for both types of motors.",
            "Series motors have low torque at low speeds.",
            "Shunt and series motors have approximately 80% efficiency above one-third of the rated load.",
            "The two types of motors have very similar efficiency curves."
        ],
        "answer": "The two types of motors have very similar efficiency curves."
    },
    {
        "question": "What is pole pitch?",
        "choices": [
            "the space on the stator allocated to one pole",
            "the angle at which the pole windings are wound",
            "the space on the stator allocated to two poles",
            "the mica used to insulate the poles from each other"
        ],
        "answer": "the space on the stator allocated to one pole"
    },
    {
        "question": "Which of the following statements regarding a compound motor is false?",
        "choices": [
            "It has a series winding",
            "It has a shunt winding",
            "It has speed remains fairly constant when subjected to sudden loads",
            "It has commutators, armature windings, and field windings"
        ],
        "answer": "It has speed remains fairly constant when subjected to sudden loads"
    },
    {
        "question": "Which of the following does not contribute to core losses in DC motors?",
        "choices": [
            "eddy current and hysteresis losses the armature",
            "commutator losses",
            "hysteresis loss in the armature",
            "eddy currents in the armature"
        ],
        "answer": "commutator losses"
    },
    {
        "question": "Which of the following are power losses in a DC motor?",
        "choices": [
            "all of the above",
            "hysteresis losses",
            "I²R losses",
            "gear and frictional losses"
        ],
        "answer": "all of the above"
    },
    {
        "question": "Which of the following statements is false regarding large DC motors?",
        "choices": [
            "Wave winding does not pass under all poles at one time.",
            "The pitch of the winding of a given coil is the number of slots spanned by the coil.",
            "Two, four, six, or eight coils may be laid in a slot in the armature to make maximum use of the flux and to generate as much power as possible.",
            "To avoid flashover, the voltage difference between adjacent commutator."
        ],
        "answer": "Wave winding does not pass under all poles at one time."
    },
    {
        "question": "Which of the following statements is false about the operation of parallel shunt generators?",
        "choices": [
            "The drooping load or decreasing terminal voltage characteristic of shunt generators makes two or more units operating in parallel more stable.",
            "One large unit would be more expensive than the use of several smaller ones, even if it ran at full load at all times.",
            "The use of several units makes maintenance and repair easier.",
            "The parallel configuration makes it possible to add units as needed, and to shut off"
        ],
        "answer": "One large unit would be more expensive than the use of several smaller ones, even if it ran at full load at all times."
    }

],

  "EE-AC Electricity": [
    {
        "question": "An alternating current with a frequency of 60 Hz is passed through a moving coil galvanometer that measures DC current. What will the galvanometer reading be equal to?",
        "choices": ["a negligible amount", "the rms value", "the peak value of the AC current", "the average value of the AC current"],
        "answer": "a negligible amount"
    },
    {
        "question": "Which of the following effects are generally less for an alternating current than for a direct current?",
        "choices": ["impedance", "chemical effects", "heating effects", "magnetic effects"],
        "answer": "chemical effects"
    },
    {
        "question": "Which of the following statements regarding transformers is false?",
        "choices": ["The copper losses (I²R) in the primary and secondary coils are equal.", "Power losses in transformers are converted to heat, which is then dissipated.", "Transformer power losses are generally low, approximately 1-3%.", "One three-phase transformer weighs more than three equivalent single-phase transformers."],
        "answer": "One three-phase transformer weighs more than three equivalent single-phase transformers."
    },
    {
        "question": "Which of the following statements about induction motors is false?",
        "choices": ["Squirrel-cage induction motors operate at essentially constant speeds.", "They have no slip rings, no brushes, and no excited field current.", "They are used to increase the line power factor.", "They have no commutators and no windings on the armature."],
        "answer": "They are used to increase the line power factor."
    },
    {
        "question": "A single-phase induction motor is not self-starting. Instead, auxiliary methods must be used, such as varying inductance, resistance, and capacitance. Which of the following is false regarding this situation?",
        "choices": ["Capacitor motors have lower starting torque than comparably sized single-phase induction motors.", "To obtain a higher reactance, a capacitor can be used when starting and then be switched out of the circuit by mechanical means.", "If the capacitor remains in the circuit, the power factor will have a value close to unity.", "A capacitor motor uses capacitance to split the phase, resulting in two phases almost 90° apart."],
        "answer": "Capacitor motors have lower starting torque than comparably sized single-phase induction motors."
    },
    {
        "question": "A squirrel-cage motor has such low resistance that it draws excessive currents when starting. Which of the following actions will not reduce this problem?",
        "choices": ["using an autotransformer to reduce line voltage", "using a class A motor", "connecting the windings as in a three-phase, wye, transformer, taking 58% of the normal line voltage; then, at sufficient motor speed, switching to a delta connection", "using an in-line rheostat"],
        "answer": "using a class A motor"
    },
    {
        "question": "Which of the following statements about AC generators is false?",
        "choices": ["An AC generator uses commutators.", "The three main types of AC generator are direct-connect engine driven, water driven, and turbine driven.", "The poles of an AC generator are located on the rotor.", "Large turbine driven generators usually have two pole rotors to accommodate the high speed of the turbine."],
        "answer": "An AC generator uses commutators."
    },
    {
        "question": "Which of the following is false regarding rotating machinery?",
        "choices": ["The avoidance of harmonics in the production of a sine wave can be achieved by using a coil having multiple loops passing through adjacent slots rather than using only one pair of slots.", "AC generator ratings are usually given in units of kVA (kilovolt amps).", "At zero power factor, the generator delivers real power to a load.", "Uniformity in the production of flux on a pole can be obtained by using distributed field windings over a portion of the rotor surface."],
        "answer": "At zero power factor, the generator delivers real power to a load."
    },
    {
        "question": "What is the relationship between the line current, Iₗ, and the coil current, Ic, in a balanced delta system?",
        "choices": ["Iₗ = √3Ic", "Iₗ = Ic", "Iₗ = Ic/√2", "Iₗ = Ic/√3"],
        "answer": "Iₗ = √3Ic"
    },
    {
        "question": "An AC alternator operated as a motor is called a synchronous motor. Which of the following statements regarding synchronous motors is false?",
        "choices": ["The average speed, regardless of load, does not decrease, since the motor must operate at a constant speed.", "The relationship between speed, frequency, and number of poles is the same for the rotating field of the induction motor and for the alternator.", "The poles of a synchronous motor must be salient.", "When a load is increased, the increased torque is a result of the shift in the relative positions of the fields on the rotor and stator."],
        "answer": "The poles of a synchronous motor must be salient."
    }

],



};



let questionPool = [];
let currentQuestionIndex = 0;

const menuContainer = document.getElementById("menu-container");
const quizContainer = document.getElementById("quiz-container");
const categoryTitle = document.getElementById("category-title");
const questionElement = document.getElementById("question");
const choicesContainer = document.getElementById("choices-container");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

document.querySelectorAll(".category").forEach(button => {
    button.addEventListener("click", () => {
        const selectedCategory = button.getAttribute("data-category");
        startQuiz(selectedCategory);
    });
});

function startQuiz(category) {
    questionPool = [...categories[category]];
    questionPool = shuffleArray(questionPool);
    currentQuestionIndex = 0;

    categoryTitle.textContent = category;
    menuContainer.style.display = "none";
    quizContainer.style.display = "block";

    /* ✅ **Added Fade-in Effect for the Quiz Section** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => { quizContainer.style.opacity = "1"; }, 100);

    loadQuestion();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function loadQuestion() {
    if (questionPool.length === 0) {
        questionElement.textContent = "🎉 REFRESH MO LANG PARA MAULIT MAY BUG KASI YUNG RESTART BUTTON HAHA 🎉";
        choicesContainer.innerHTML = "";
        nextButton.style.display = "none";
        restartButton.style.display = "inline-block";

     
        quizContainer.classList.add("celebrate");
        setTimeout(() => quizContainer.classList.remove("celebrate"), 2000);

        return;
    }

    const currentQuestion = questionPool[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    choicesContainer.innerHTML = "";

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.classList.add("choice");
        button.addEventListener("click", () => handleChoice(button, choice, currentQuestion.answer));

        /* ✅ **Smooth Button Click Effect** ✅ */
        button.style.transition = "transform 0.2s ease";
        button.addEventListener("mousedown", () => button.style.transform = "scale(0.95)");
        button.addEventListener("mouseup", () => button.style.transform = "scale(1)");

        choicesContainer.appendChild(button);
    });

    nextButton.disabled = true;
}

const wrongSound = new Audio('wrong1.mp3'); // Ensure "wrong.mp3" is in your project folder

function handleChoice(button, selected, correct) {
    const buttons = document.querySelectorAll(".choice");
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) {
            btn.classList.add("correct");
		btn.style.boxShadow = "0 0 10px #28a745";
        } else if (btn.textContent === selected) {
            btn.classList.add("incorrect");
		btn.style.animation = "shake 0.3s ease-in-out";
            wrongSound.play(); // Play sound when answer is incorrect
        }
    });

    if (selected === correct) {
        questionPool.splice(currentQuestionIndex, 1); // Remove question if answered correctly
    } else {
        questionPool.push(questionPool[currentQuestionIndex]); // Add question back to the pool if answered incorrectly
        questionPool.splice(currentQuestionIndex, 1); // Remove current question from this round
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    /* ✅ **Added Smooth Transition Between Questions** ✅ */
    quizContainer.style.opacity = "0";
    setTimeout(() => {
        loadQuestion();
        quizContainer.style.opacity = "1";
    }, 300);
});

restartButton.addEventListener("click", () => {
    // ✅ Reset Everything Like a Fresh App Start
    menuContainer.style.display = "block"; // Show menu again
    quizContainer.style.display = "none"; // Hide quiz
    quizContainer.classList.remove("celebrate");

    // ✅ Reset Buttons and UI
    nextButton.style.display = "none";  // Hide Next button initially
    restartButton.style.display = "none";  // Hide Restart button

    // ✅ Reload Question Pool to Start Fresh
    questionPool = []; // Clear old questions
    currentQuestionIndex = 0; // Reset index

    // ✅ Reload Category Selection to Restart Properly
    document.querySelectorAll(".category").forEach(button => {
        button.addEventListener("click", () => {
            const selectedCategory = button.getAttribute("data-category");
            startQuiz(selectedCategory);
        });
    });
});
